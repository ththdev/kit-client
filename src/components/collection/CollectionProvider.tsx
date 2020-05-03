import React from 'react'
import styled from 'styled-components'
import Collection from './Collection'

const CollectionProvider = () => {
    return (
        <Layout>
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Offset />
        </Layout>
    )
}

const Layout = styled.div`
    width: 100vw;
    display: flex;
    overflow-x: scroll;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;

    .collection-wrapper {
        display: inline-block;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
`

const Offset = styled.div`
    min-width: 10px;
    height: 50px;
`

export default CollectionProvider