import React from 'react'
import styled from 'styled-components'
import GoogleLogin from 'react-google-login'
import GoogleFill from '../../assets/icons/google-fill.svg'

const GoogleButton: React.FC = () => {
    return (
        <GoogleLogin 
            clientId="493563361431-g4bar57i9uudnp5oih3a53jom7bn42qu.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseFail}
            buttonText="Login"
            render={renderProps => {
                console.log(renderProps.onClick)
                return (
                    <Button onClick={props => console.log('clicked')} >
                        <GoogleIcon src={GoogleFill} />
                        Google로 시작하기
                    </Button>
                )
            }}
            cookiePolicy={'single_host_origin'}
        />
    )
}

const responseGoogle = (res: any) => {
    console.log(res)
}

const responseFail = (err: any) => {
    console.error(err)
}

const Button = styled.div`
    padding: 0;
    width: 100%;
    height: 50px;
    color: #000;
    display: flex;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    border-radius: 3px;
    position: relative;
    align-items: center;
    justify-content: center;
    background: #fff;
    outline: none;
`

const GoogleIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 30px;
`

export default GoogleButton