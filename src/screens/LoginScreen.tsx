import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CheckBoxFill from '../assets/icons/checkbox-circle-fill.svg'
import CheckBoxLine from '../assets/icons/checkbox-circle-line.svg'
import { Redirect } from 'react-router-dom'

// Button
import KakaoButton from '../components/auth/KakaoButton'
import GoogleButton from '../components/auth/GoogleButton'

import TextLoop from 'react-text-loop'

const LoginScreen:React.FC = () => {
    let [checked, setChecked] = useState(false);

    const token = localStorage.getItem("ACCESS_TOKEN")

    if(token) {
        return <Redirect to="/profile" />
    }
    
    return (
        <Layout>
            <Container>
                <Message>
                    <Small children={["🖥 서재 키트", "🙋‍♀ 김지혜 키트", "🏕 캠핑 키트"]} 
                        interval={4000}
                        fade={true}
                        springConfig={{ stiffness: 300, damping: 30 }}
                    />
                    <br />
                    <Medium children={["서재에 필요한", "지혜가 쓰는", "캠핑에 필요한"]} 
                        interval={4000}
                        fade={true}
                        springConfig={{ stiffness: 300, damping: 30 }}
                    />{" "}
                    물건 모음
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
                <KakaoButton />
                <LineOr>
                    <span>또는</span>
                </LineOr>
                <GoogleButton />
                <UserInfo>
                    <Link to="/">회원가입</Link>
                    <Link to="/">암호 재설정</Link>
                </UserInfo>
            </Container>
        </Layout>
    )
}

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    overflow: hidden;
`

const Container = styled.div`
    width: 295px;
    display: flex;
    flex-direction: column;
`

const Message = styled.div`
    font-weight: normal;
    margin-bottom: 30px;
    font-size: 24px;
`

const Small = styled(TextLoop)`
    font-size: 18px;
    font-weight: bold;
`

const Medium = styled(TextLoop)`
    
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