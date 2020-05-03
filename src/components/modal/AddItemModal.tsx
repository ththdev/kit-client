import React from 'react'
import { inject, observer } from 'mobx-react'
import ModalHeader from './ModalHeader'
import ModalContainer from './ModalContainer'

interface Props {
    testStore?: any
}

@inject('testStore')
@observer
class AddItemModal extends React.Component<Props> {
    render() {
        const { testStore } = this.props;
        const { addItemModal, toggleAddItemModal } = testStore;

        return (
            <ModalContainer activate={addItemModal}>
                <ModalHeader title="새로운 아이템" handler={toggleAddItemModal}/>
            </ModalContainer>
        )
    }
}


export default AddItemModal