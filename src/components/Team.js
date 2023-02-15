import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';
import SectionHeading from './SectionHeading';
import { Trans } from 'react-i18next';
import media from '../styles/breakpoints';

const Team = () => {
  const {
    allTeamJson: { edges: team }
  } = useStaticQuery(graphql`
        {
          allTeamJson {
            edges {
              node {
                id
                title {
                  en
                  fr
                }
                desc {
                  en
                  fr
                }
                img {
                  childImageSharp {
                    gatsbyImageData(width: 275, placeholder: BLURRED, layout: FIXED)
                  }
                }
              }
            }
          }
        }
      `);
  return (
    <Section>
      <Wrapper>
        <SectionHeading id="team"><Trans>Meet the team</Trans></SectionHeading>
        <Grid>
          {team.map(({ node: teammate }) => (
            <Card key={teammate.id} {...teammate} direction="right" />
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}

export default Team

// CSS

// Calculate the value of the scrollbar width to avoid horizontal scrolling
const scrollbarWidth = window.innerWidth - document.body.clientWidth + 0.5;
document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`);

const Section = styled.section`
/* make the section full-bleed despite the <main> width being 1380px, and without any horizontal scrolling */
  width: calc(100vw - var(--scrollbarWidth));
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-secondary);
`;

const Wrapper = styled.div`
    max-width: var(--max-content);
    margin-left: auto;
    margin-right: auto;
    padding: 0 var(--spacing-m);

    ${media.m`
      padding: 0;
    `}
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(200px, 275px));
  justify-content: center;
`;