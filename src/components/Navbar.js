import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Navbar = () => (
    <Header>
        <StaticImage
            src='../assets/images/logo-elco.jpg'
            alt='Elco logo'
            height={50}
            placeholder='tracedSVG'
            layout='fixed'
            imgStyle={{objectPosition: 'bottom'}}
        />
        <Menu>
            <MenuLink to='#solutions' stripHash title='Solutions' />
            <MenuLink to='/#team' stripHash  title="L'équipe" />
            <MenuLink to='/#contact' stripHash title="Contact" />
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
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.08);
    padding: 0 var(--spacing-s);
`

const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuLink = styled(AnchorLink)`
    color: var(--color-heading);
    text-transform: uppercase;
    margin-left: var(--spacing-m);
    font-weight: bold;
`
