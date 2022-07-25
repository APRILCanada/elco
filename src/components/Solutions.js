import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';
import SectionHeading from './SectionHeading';
import QuestionIcon from '../assets/icons/question';

const Solutions = () => {
  const {
    allSolutionsJson: { edges: solutions }
  } = useStaticQuery(graphql`
    {
      allSolutionsJson {
        edges {
          node {
            id
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
      <SectionHeading>Nos solutions</SectionHeading>
      <Grid>
        {solutions.map(({ node: solution }) => (
          <Card key={solution.id} {...solution} />
        ))}
        <CtaQuestions>
          <span>Des questions</span>
          <QuestionIcon />

        </CtaQuestions>
      </Grid>
    </Section>
  );
};

export default Solutions;

// CSS
const Section = styled.section`
  max-width: var(--max-content);
  margin: 0 auto;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  gap: var(--spacing-l);
  grid-template-columns: repeat(auto-fill, minmax(200px, 275px));
  justify-content: center;
`;

const CtaQuestions = styled.div`
  width: 275px;
  height: 275px;
  border-radius: 50%;
  padding: var(--spacing-m);
  background-color: var(--color-secondary);
  color: var(--color-white);
  box-shadow: var(--box-shadow-btn);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 1.9rem;
`
