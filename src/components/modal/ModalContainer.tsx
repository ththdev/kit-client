import React from 'react'
import styled from 'styled-components'

interface Props {
    activate: boolean
}

const ModalContainer:React.FC<Props> = props => {
    return (
        <Container className={props.activate ? "active" : ""}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s ease-in;
    transform: translateY(100vh);

    &.active {
        transform: translateY(0);
    }
`

export default ModalContainer