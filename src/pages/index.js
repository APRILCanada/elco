import * as React from "react"
import About from "../components/About"
import Hero from "../components/Hero"
import Solutions from "../components/Solutions"
import Team from "../components/Team"
import Contact from "../components/Contact"
import { graphql } from 'gatsby'


const IndexPage = () => {
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

// query the translation
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
