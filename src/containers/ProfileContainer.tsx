import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/react-hooks'
import { GET_CURRENT_USER } from '../graphql/user'
import AppLayout from '../components/base/AppLayout'
import { useHistory } from 'react-router-dom'

const ProfileContainer = () => {
    const client = useApolloClient();
    const [ username, setUsername ] = useState("")
    const history = useHistory();
    
    const getCurrentUser = async () => {

        try {
            const result = await client.query({
                query: GET_CURRENT_USER,
                variables: { token: localStorage.getItem("ACCESS_TOKEN") }
            })
            const user = result.data.currentUser
            setUsername(user.name)
        } catch(e) {
            console.error(e)
        }
    }

    const logout = () => {
        localStorage.removeItem("ACCESS_TOKEN")
        history.push('/login')
    }

    useEffect(() => {
        getCurrentUser()
    })

    return (
        <AppLayout>
            <Box>
                안녕하세요!<br />
                {username}님

                <LogoutButton onClick={() => logout()}>로그아웃</LogoutButton>
            </Box>
        </AppLayout>
    )
}

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

const LogoutButton = styled.div`
    margin-top: 60px;
    color: red;
`

export default ProfileContainer