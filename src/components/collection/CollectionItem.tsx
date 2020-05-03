import React from 'react'
import styled from 'styled-components'

interface Props {
    isLast?: boolean
}

const CollectionItem:React.FC<Props> = props => {
    return (
        <Container>
            <ItemImage src="https://www.costco.co.kr/medias/sys_master/images/hdd/h70/29245898391582.jpg" />
            <ItemInfo className={ props.isLast ? "lastItem" : ""}>
                <div className="col">
                    <Name>닌텐도 스위치 동물의 ...</Name>
                    <Brand>Nintendo</Brand>
                </div>
                <Price>₩ 360,000</Price>
            </ItemInfo>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 80px;
    align-items: center;
    padding-bottom: 20px;
`

const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 10px;
`

const ItemInfo = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    &.lastItem {
        border-bottom: none;
    }
    
    .col {
        display: flex;
        flex-direction: column;
    }
`

const Name = styled.div`
    font-size: 12px;
    font-weight: bold;
`

const Brand = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: rgba(0,0,0,0.2);
`

const Price = styled.div`
    font-size: 14px;
    font-weight: bold;
`

export default CollectionItem