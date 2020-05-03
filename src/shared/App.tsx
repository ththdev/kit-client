import React from 'react';
import './App.css';
import styled from 'styled-components'
import { IoIosAddCircle } from 'react-icons/io'
import CollectionProvider from '../components/collection/CollectionProvider'
import { observer, inject } from 'mobx-react'
import { ITestStore } from '../store/test'
import AddCollectionModal from '../components/modal/AddCollectionModal';
import AddItemModal from '../components/modal/AddItemModal'

interface Props {
  testStore?: ITestStore
}

@inject('testStore')
@observer
export default class App extends React.Component<Props, {}> {
  render() {
    const store = this.props.testStore as ITestStore
    const { toggleAddCollectionModal } = store

    return (
      <Layout className="App">
        <Header>
          <Top>
            <IoIosAddCircle size={24} onClick={() => toggleAddCollectionModal()}/>
          </Top>
          <Title>컬렉션</Title>
        </Header>
        <CollectionProvider />

        <AddCollectionModal />
        <AddItemModal />
      </Layout>
    );
  }
}

const Layout = styled.div`
  padding-top: 60px; 
`

const Header = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  width: 100%;
  text-align: right;
`
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`
