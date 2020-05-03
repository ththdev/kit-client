import { observable, action } from 'mobx'

export type ITestStore = {
    addCollectionModal: boolean
    addItemModal: boolean
    toggleAddCollectionModal: Function
    toggleAddItemModal: Function
}

export class TestStore {
    @observable
    addCollectionModal = false;

    @observable
    addItemModal = false;

    @action
    toggleAddCollectionModal = () => {
        this.addCollectionModal = this.addCollectionModal ? false : true;
    }

    @action
    toggleAddItemModal = () => {
        this.addItemModal = this.addItemModal ? false : true;
    }
}

export default new TestStore()