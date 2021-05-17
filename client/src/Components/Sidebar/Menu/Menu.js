import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Home" icon/>
            <MenuLink title="Dash Board" active />
            <MenuLink title="Edit Profile" />
            <MenuLink title="ChatRoom"/>
            <MenuLink title="Logout" />
        </Container>
    )
}

export default Menu
