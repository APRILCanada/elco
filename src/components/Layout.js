import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/global'
import Navbar from "./Navbar"
import Footer from "./Footer"
import PrivacyPolicy from "./PrivacyPolicy";
import { ModalProvider } from "../context/modal";


const Layout = ({ children }) => (
    <ModalProvider>
        <GlobalStyle />
        <Navbar />
        <Main>
            {children}
        </Main>
        <Footer />
    </ModalProvider>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default Layout

const Main = styled.main`
  padding-left: var(--spacing-m);
  padding-right: var(--spacing-m);
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: var(--spacing-l);
`
