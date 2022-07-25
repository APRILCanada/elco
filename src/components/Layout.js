import React from "react"
import styled from "styled-components"
import GlobalStyle from '../styles/global'
import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navbar />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)

export default Layout

const Main = styled.main`
  padding-left: var(--spacing-m);
  padding-right: var(--spacing-m);
  max-width: var(--max-width);
  margin: var(--spacing-l) auto;
`