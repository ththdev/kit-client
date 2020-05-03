import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

interface Props {
    testStore?: any
}

const AddItemButton:React.FC<Props> = props => {
    const { toggleAddItemModal } = props.testStore
    return (
        <Container onClick={() => toggleAddItemModal()}>
            새로운 아이템
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 45px;
    border-radius: 10px;
    background: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default inject('testStore')(observer(AddItemButton));