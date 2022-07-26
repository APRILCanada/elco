import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import media from '../styles/breakpoints';
import Hamburger from './Hamburger';
import { motion, useCycle } from 'framer-motion'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 30px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 93% 30px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        },
    }
};

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    return (
        <Header>
            <StaticImage
                src='../assets/images/logo-elco.jpg'
                alt='Elco logo'
                height={50}
                placeholder='tracedSVG'
                layout='fixed'
                imgStyle={{ objectPosition: 'bottom' }}
            />
            <SideNav initial={false} animate={isOpen ? "open" : "closed"} variants={sidebar}>
                {/* <MenuMobileLink to='/#solutions' onClick={() => toggleOpen()}>Solutions</MenuMobileLink> */}
            </SideNav>

            <Menu>
                <MenuLink to='/#solutions'>Solutions</MenuLink>
                <MenuLink to='/#team'>L'équipe</MenuLink>
                <MenuLink to='/#contact'>Contact</MenuLink>
            </Menu>

            <MenuToggle initial={false} animate={isOpen ? "open" : "closed"}>
                <Hamburger toggle={() => toggleOpen()} />
            </MenuToggle>

        </Header>
    )
}

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

const Menu = styled(motion.nav)`
   display: none;

   ${media.s`
    display: flex;
    justify-content: space-between;
    align-items: center;
   `}
`

const MenuLink = styled(AnchorLink)`
    color: var(--color-heading);
    text-transform: uppercase;
    margin-left: var(--spacing-m);
    font-weight: bold;
`

const MenuMobileLink = styled(AnchorLink)`
    color: var(--color-white);
    text-transform: uppercase;
    margin-left: var(--spacing-m);
    font-weight: bold;
`

const SideNav = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  background: var(--color-tertiary);
  z-index: 11;
`

const MenuToggle = styled(motion.div)`
   ${media.s`
    display: none;
   `}
`