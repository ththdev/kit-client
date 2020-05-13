import React from 'react'
import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'

const KakaoButton: React.FC = () => {
    return (
        <Button 
            jsKey="e9d1fe1f98fe9602e214f4ea24ecbb4b"
            buttonText="Kakao으로 시작하기"
            onSuccess={responseKakao}
            onFailure={responseFail}
            getProfile={true}
        />
    )
}

const responseKakao = (res: any) => {
    console.log(res)
}

const responseFail = (err: any) => {
    console.error(err)
}

const Button = styled(KakaoLogin)`
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

export default KakaoButton