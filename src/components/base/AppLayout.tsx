import React from 'react'
import styled from 'styled-components'
import BottomTab from './BottomTab'

const AppLayout:React.FC = ({ children }) => {
    return (
        <Container>
            {children}
            <BottomTab />
        </Container>
    )
}

const Container = styled.div`

`

export default AppLayout