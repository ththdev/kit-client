import React from 'react'
import styled from 'styled-components'
import ModalHeader from './ModalHeader'
import { inject, observer } from 'mobx-react'

interface State {
    name?: string,
    testStore?: any,
}

@inject('testStore')
@observer
class AddCollectionModal extends React.Component<State> {
    state:State = {
        name: "",
    }

    render() {
        const { testStore } = this.props
        const { addCollectionModal, toggleAddCollectionModal } = testStore
        return (
            <Container className={addCollectionModal ? "active" : ""}>
                <ModalHeader title="새로운 컬렉션" value={this.state.name} handler={toggleAddCollectionModal} />
                <FeildContainer>
                    <NameField>
                        <label>이름</label>
                        <input 
                            type="text" 
                            placeholder="컬렉션 이름"
                            value={this.state.name}
                            onChange={e => this.setState({
                                name: e.target.value
                            })}
                        />
                    </NameField>
                </FeildContainer>
            </Container>
        )
    }
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

const FeildContainer = styled.div`
    padding: 0 20px;
`


const NameField = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f2f2f2;

    label {
        margin-bottom: 20px;
    }

    input {
        font-size: 16px;
        margin-bottom: 10px;
        outline: none;
        border: none;
    }
`

export default AddCollectionModal