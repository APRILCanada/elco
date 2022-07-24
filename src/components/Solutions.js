import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';

const Solutions = () => {
  const {
    allSolutionsJson: { edges: solutions }
  } = useStaticQuery(graphql`
    {
      allSolutionsJson {
        edges {
          node {
            title
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
      <Grid>
        {solutions.map(({ node: solution }) => (
          <Card key={solution.id} {...solution} />
        ))}
      </Grid>
    </Section>
  );
};

export default Solutions;

const Section = styled.section`
  max-width: 980px;
  margin: 0 auto;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(200px, 275px));
  justify-content: center;
`;
