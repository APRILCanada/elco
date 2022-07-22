import React from 'react'
import styled from 'styled-components'
import media from '../styles/breakpoints'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => (
    <Section>
        <Wrapper>
            <Header>
                <StaticImage src="../assets/icons/lightbulb.png" alt="About" width={85} height={85} placeholder='tracedSVG' className="float" />
                <Heading>Depuis 1992, ELCO s'efforce d'accompagner ses clients dans leur recherche de 
                    <span className='highlight'> solutions d'assurances spécialisées.</span>
                </Heading>
            </Header>

            <Paragraph>Au sein de notre cabinet, nos courtiers experts de leur domaine s'impliquent au quotidien pour offrir à nos clients
                et futurs assurés une expérience de l'assurance remarquable et une expertise fine sur nos marchés.</Paragraph>

            <Paragraph>
                Avec pour ambition de devenir le chef de file de l'assurance bateau et entrepreneurs en construction,
                découvrez comment ELCO vous accompagne au quotidien.
            </Paragraph>
        </Wrapper>
    </Section>
)

export default About

const Section = styled.section`
  /* make the banner full-bleed despite the <main> width being 1280px */
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
`

/* constrains the content of the banner in the max-width of the <main> */
const Wrapper = styled.div`
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-m);

  ${media.s`
    height: 280px;
    flex-direction: row;
    padding: 0 var(--spacing-m);
    `}
`

const Header = styled.div`
position: relative;
`

const Heading = styled.h2`
    color: var(--color-white) !important;
    width: 100%;
    margin-top: -1rem;
`

const Paragraph = styled.p`
    color: var(--color-white);
    font-weight: 100;
    font-family: var(--font);
`
