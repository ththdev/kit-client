import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import KakaoLogin from'react-kakao-login'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import CheckBoxFill from '../assets/icons/checkbox-circle-fill.svg'
import CheckBoxLine from '../assets/icons/checkbox-circle-line.svg'
import GoogleFill from '../assets/icons/google-fill.svg'

import TextLoop from 'react-text-loop'

const LoginScreen:React.FC = () => {
    let [checked, setChecked] = useState(false);

    return (
        <Layout>
            {/* <LoginCarousel /> */}
            <Container>
                <Message>
                    <Small children={["🖥 서재 키트", "🙋‍♀ 김지혜 키트", "🏕 캠핑 키트", "클레오파트라 키트"]} />
                    <Medium children={["서재에 필요한", "김지혜가 쓰는", "캠핑에 필요한", "클레오파트라가 쓰는"]} />
                    <span> 물건 모음</span>
                </Message>
                <LocalField>
                    <input type="text" placeholder="이메일" />
                </LocalField>
                <LocalField>
                    <input type="password" placeholder="비밀번호" />
                </LocalField>
                <SetLogin onClick={() => setChecked(checked ? false : true)}>
                    <CheckBox src={checked ? CheckBoxFill : CheckBoxLine} />
                    <span>로그인 상태 유지</span>
                </SetLogin>
                <KakaoButton 
                    jsKey=""
                    buttonText="Kakao으로 시작하기"
                    onSuccess={responseKakao}
                    onFailure={responseFail}
                    getProfile={true}
                />
                <LineOr>
                    <span>또는</span>
                </LineOr>
                <GoogleButton>
                    <GoogleIcon src={GoogleFill} />
                    Google로 시작하기
                </GoogleButton>
                <UserInfo>
                    <Link to="/">회원가입</Link>
                    <Link to="/">암호 재설정</Link>
                </UserInfo>
            </Container>
        </Layout>
    )
}

const responseKakao = (res: any) => {
    console.log(res)
}

const responseGoogle = (res: any) => {
    console.log(res)
}

const responseFail = (err: any) => {
    console.error(err)
}

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

const Container = styled.div`
    width: 295px;
    display: flex;
    flex-direction: column;
`

const Message = styled.div`
    font-size: 36px;
    font-weight: normal;
    margin-bottom: 30px;
`

const Small = styled(TextLoop)`
    display: block;
    font-size: 18px;
    font-weight: bold;
`

const Medium = styled(TextLoop)`
    display: block;
`

const LocalField = styled.div`
    width: 100%;
    height: 50px;
    line-height: 48px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 10px;

    input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        background: transparent;
        outline: none;
        border: none;

        &:focus { outline: none }
        &::placeholder {
            color: #000;
            font-size: 16px;
        }
    }
`

const CheckBox = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const SetLogin = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
    display: flex;
    height: 20px;
    align-items: center;

    span {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        vertical-align: middle;
    }
`

const LineOr = styled.div`
    width: 100%;
    padding: 15px 0;

    span {
        display: inline-block;
        width: 40px;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
    }

    &::before, &::after  {
        display: inline-block;
        width: calc(50% - 20px);
        height: 1px;
        margin: 13px 0;
        vertical-align: top;
        background: #f2f2f2;
        content: '';
    }
`

const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #000;
    background-color: #FFEB00;
    border-radius: 3px;
    font-size: 16px;
    border: none;
`

const GoogleButton = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const GoogleIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 30px;
`

const UserInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    
    a {
        font-size: 12px;
    }
`



export default LoginScreen