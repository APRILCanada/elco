import React from "react"
import styled from "styled-components"
import GlobalStyle from '../styles/global'
import Navbar from "./Navbar"


const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navbar />
        <Main>
            {children}
        </Main>
    </>
)

export default Layout

const Main = styled.main`
  padding-left: var(--spacing-m);
  padding-right: var(--spacing-m);
  max-width: 1380px;
  margin: var(--spacing-l) auto;
`