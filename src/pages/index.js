import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Solutions from "../components/Solutions"
import Team from "../components/Team"
import { useLocalization } from "gatsby-theme-i18n"
import Contact from "../components/Contact"


const IndexPage = ({ data }) => {
  const { locale, defaultLang, config } = useLocalization()
  console.log("locale", locale)

  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Team />
      <Contact />
    </>
  )
}

export default IndexPage
