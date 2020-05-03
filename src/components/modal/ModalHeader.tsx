import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

interface ModalHeaderProps {
    title: String,
    value?: String,
    testStore?: any,
    handler: Function
}

@inject('testStore')
@observer
class ModalHeader extends React.Component<ModalHeaderProps> {
    render() {
        const { title, value, handler } = this.props;
        
        return (
            <Container>
                <HeaderItem className="left">
                    <CancelButton onClick={() => handler()}>취소</CancelButton>
                </HeaderItem>
                <HeaderItem className="center">
                    <Title>{title}</Title>
                </HeaderItem>
                <HeaderItem className="right">
                    <DoneButton
                        className={ value ? "active" : "" }
                        onClick={() => handler()}
                    >
                        완료
                    </DoneButton>
                </HeaderItem>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: 20px;
`

const HeaderItem = styled.div`
    display: flex;
    width: 33.3%;
    align-items: center;
    
    &.left { justify-content: flex-start; }
    &.center { justify-content: center; }
    &.right { justify-content: flex-end; }
`

const CancelButton = styled.div`
    font-size: 16px;
`

const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
`

const DoneButton = styled.div`
    font-size: 16px;
    color: rgba(0,0,0,0.4);

    &.active {
        color: #000;
    }
`

export default ModalHeader