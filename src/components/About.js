import React from 'react';
import styled from 'styled-components';
import media from '../styles/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <Section>
    <Wrapper>
      <ColImg>
        <StaticImage src='../assets/icons/lightbulb.png' alt='About' width={185} height={185} placeholder='tracedSVG' loading='lazy' />
      </ColImg>

      <ColText>
        <Heading>
          Depuis 1992, ELCO s'efforce d'accompagner ses clients dans leur recherche de
          <span className='highlight'> solutions d'assurances spécialisées.</span>
        </Heading>
        <Paragraph>Au sein de notre cabinet, nos courtiers experts de leur domaine s'impliquent au quotidien pour offrir à nos clients et futurs assurés une expérience de l'assurance remarquable et une expertise fine sur nos marchés.</Paragraph>
        <Paragraph>Avec pour ambition de devenir le chef de file de l'assurance bateau et entrepreneurs en construction, découvrez comment ELCO vous accompagne au quotidien.</Paragraph>
      </ColText>
    </Wrapper>
  </Section>
);

export default About;

const Section = styled.section`
  /* make the section full-bleed despite the <main> width being 1380px */
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
`;

/* constrains the content of the section */
const Wrapper = styled.div`
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  padding: var(--spacing-s) var(--spacing-m);

  ${media.xs`
      flex-direction: row;
    `}
`;

const Heading = styled.h2`
  color: var(--color-white) !important;
`;

const Paragraph = styled.p`
  color: var(--color-white);
  font-weight: 100;
  font-family: var(--font);
`;

const ColImg = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 120px;

  ${media.xs`
    flex: 1;
    max-width: initial;
    `}
`;

const ColText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
