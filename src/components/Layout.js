import * as React from "react"
import GlobalStyle from '../styles/global'
import Navbar from "./Navbar"


const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navbar />
        <main>
            {children}
        </main>
    </>
)

export default Layout