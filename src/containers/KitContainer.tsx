import React from 'react'
import styled from 'styled-components'
import AppLayout from '../components/base/AppLayout'

const KitContainer:React.FC = () => {
    return (
        <AppLayout>
            <Box>
                KitContainer
            </Box>
        </AppLayout>
    )
}

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export default KitContainer