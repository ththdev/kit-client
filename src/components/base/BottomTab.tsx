import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HomeFill from '../../assets/icons/home-5-fill.svg'


const BottomTab: React.FC = history => {
    return (
        <Container>
            <Tab to="/">
                <TabIcon src={HomeFill} />
            </Tab>
            <Tab to="/profile">
                <ProfileImg src="https://www.nemopan.com/files/attach/images/6294/004/387/013/63dac7acb2889fd9d34b68a338f9af8c.jpg" />
            </Tab>
        </Container>
    )   
}

const Container = styled.div`
    width: 100%;
    height: 54px;
    background: #fff;
    border-top: 1px solid rgb(230, 236, 240);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
`

const Tab = styled(Link)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TabIcon = styled.img`
    width: 26px;
    height: 26px;
`

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;

`

export default BottomTab