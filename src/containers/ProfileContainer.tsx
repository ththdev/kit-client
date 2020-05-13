import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/react-hooks'
import { GET_CURRENT_USER } from '../graphql/user'
import AppLayout from '../components/base/AppLayout'

const ProfileContainer: React.FC = () => {
    const client = useApolloClient();
    const [ username, setUsername ] = useState("")

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

    useEffect(() => {
        getCurrentUser()
    })

    return (
        <AppLayout>
            안녕하세요!<br />
            {username}님 
        </AppLayout>
    )
}

export default ProfileContainer