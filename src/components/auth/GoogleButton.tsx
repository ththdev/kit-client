import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import GoogleLogin from 'react-google-login'
import GoogleFill from '../../assets/icons/google-fill.svg'
import { GOOGLE_LOGIN } from '../../graphql/user'
import { useApolloClient } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'


const GoogleButton = () => {
    const client = useApolloClient();
    const history = useHistory();    
    const [isLogin, setIsLogin] = useState(false);

    const responseGoogle = async (res: any) => {
        const { googleId } = res;
        const { name, email, imageUrl } = res.profileObj;
    
        try {
            await client.mutate({
                mutation: GOOGLE_LOGIN,
                variables: { name, googleId, email, profileImage: imageUrl }
            }).then(result => {
                const token = result.data.googleLogin.token
                localStorage.setItem("ACCESS_TOKEN", token)
            })
            setIsLogin(true)
            history.push('/')
        } catch(e) {
            console.error(e)
        }
    }
    
    const responseFail = (err: any) => {
        console.error(err)
    }

    return (
        <GoogleLogin 
            clientId="493563361431-g4bar57i9uudnp5oih3a53jom7bn42qu.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseFail}
            buttonText="Login"
            render={renderProps => {
                return (
                    <Button onClick={renderProps.onClick} >
                        <GoogleIcon src={GoogleFill} />
                        Google로 시작하기
                    </Button>
                )
            }}
        />
    )
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