import React from 'react'
import CollectionItem from './CollectionItem'

const CollectionItemProvider:React.FC<{}> = props => {
    return (
        <>
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem isLast={true} />
        </>
    )
}

export default CollectionItemProvider