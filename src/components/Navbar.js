import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'


const Navbar = () => (
    <Header>
        <StaticImage
            src='../assets/images/logo-elco.jpg'
            alt='Elco logo'
            height={50}
            placeholder='tracedSVG'
            layout='fixed'
        />
        <Menu>
            <MenuLink to=''>solutions</MenuLink>
            <MenuLink to=''>l'équipe</MenuLink>
            <MenuLink to=''>contact</MenuLink>
        </Menu>
    </Header>
)

export default Navbar


// CSS
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    box-shadow: 0 2px 14 px rgba(0, 0, 0, 0.1);
    padding: 0 var(--spacing-s);
`

const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuLink = styled(Link)`
    color: var(--color-heading);
    text-transform: uppercase;
    margin-left: var(--spacing-m);
    font-weight: bold;
`
