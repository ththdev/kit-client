import gql from 'graphql-tag'

export const GET_USERS = gql`
    query users {
        users {
            name
            email
            profileImage
            googleId
            kakakoId
        }
    }
`

export const GET_CURRENT_USER = gql`
    query currentUser($token: String!) {
        currentUser(token: $token) {
            id
            name
            email
            profileImage
            isAdmin
            googleId
            kakaoId
        }
    }
`

export const GOOGLE_LOGIN = gql`
    mutation googleLogin(
        $name: String!, 
        $email: String, 
        $googleId: String!, 
        $profileImage: String
    ) {
        googleLogin(
            name: $name,
            email: $email,
            googleId: $googleId,
            profileImage: $profileImage
        ) {
            token
        }
    }
`

export const KAKAO_LOGIN = gql`
    mutation kakaoLogin(
        $name: String!, 
        $email: String, 
        $kakaoId: String!, 
        $profileImage: String
    ) {
        kakaoLogin(
            name: $name,
            email: $email,
            kakaoId: $kakaoId,
            profileImage: $profileImage
        ) {
            token
        }
    }
`