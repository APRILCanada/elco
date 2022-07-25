import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';

const Team = () => {
  const {
    allTeamJson: { edges: team }
  } = useStaticQuery(graphql`
        {
          allTeamJson {
            edges {
              node {
                id
                title
                desc
                img {
                  childImageSharp {
                    gatsbyImageData(width: 130, placeholder: TRACED_SVG, layout: FIXED)
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


const Section = styled.section`
  /* make the section full-bleed despite the <main> width being 1380px */
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-secondary);
`;

const Wrapper = styled.div`
    max-width: var(--max-content);
    margin-left: auto;
    margin-right: auto;
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(200px, 275px));
  justify-content: center;
`;