import React from 'react'
import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'
import { KAKAO_LOGIN } from '../../graphql/user'
import { useApolloClient } from '@apollo/react-hooks'

const KakaoButton: React.FC = () => {
    const client = useApolloClient();

    const responseKakao = async (res: any) => {
        const { id } = res.profile
        const { email } = res.profile.kakao_account
        const { nickname, profile_image, } = res.profile.properties
        
        try {
            await client.mutate({
                mutation: KAKAO_LOGIN,
                variables: {
                    name: nickname,
                    email,
                    kakaoId: id.toString(),
                    profileImage: profile_image
                }
            }).then(result => {
                const token = result.data.kakaoLogin.token
                localStorage.setItem("ACCESS_TOKEN", token)
            })
        } catch (e) {
            console.error(e)
        }
    }
    
    const responseFail = (err: any) => {
        console.error(err)
    }

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