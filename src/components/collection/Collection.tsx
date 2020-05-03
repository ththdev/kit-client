import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import AddItemButton from './AddItemButton'
import CollectionItemProvider from './CollectionItemProvider'

interface Props {
    isLast?: boolean
    testStore?: any
}

const Collection:React.FC<Props> = props => {
    return (
        <Container className={props.isLast === true ? "last" : ""}>
            <Header>
                <SubTitle>8개의 아이템</SubTitle>
                <Title>새학기 갖고싶은 것들</Title>
                <ProgressBar>
                    <div className="active" />
                </ProgressBar>
            </Header>
            <CollectionItemProvider />
            <TotalPrice>= $ 789,600</TotalPrice>
            <AddItemButton />
        </Container>
    )
}


const Container = styled.div`
    display: inline-block;
    min-width: 335px;
    padding: 20px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    margin-right: 10px;
    
    &.last {
        margin-right: 100px;
    }
`

const Header = styled.div`
    padding-bottom: 20px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

const SubTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: rgba(0,0,0,0.4);
    margin-bottom: 5px;
`

const ProgressBar = styled.div`
    width: 100%;
    height: 5px;
    background: #f2f2f2;
    border-radius: 10px;

    .active {
        width: 30%;
        height: 5px;
        background: #67CF5B;
        border-radius: 10px;
    }
`

const TotalPrice = styled.div`
    padding: 30px 0;
    font-size: 24px;
    font-weight: bold;
    border-top: 1px solid rgba(0,0,0,0.1);
    text-align: right;
`

export default inject("testStore")(observer(Collection))