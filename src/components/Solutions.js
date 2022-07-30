import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Card from './Card';
import SectionHeading from './SectionHeading';
import QuestionIcon from '../assets/icons/question';
import { Trans } from 'react-i18next';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Solutions = () => {
  const {
    allSolutionsJson: { edges: solutions }
  } = useStaticQuery(graphql`
    {
      allSolutionsJson {
        edges {
          node {
            id
            title {
              fr
              en
            }
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
      <SectionHeading id='solutions'>
        <Trans>Our solutions</Trans>
      </SectionHeading>
      <Grid>
        {solutions.map(({ node: solution }) => (
          <Card key={solution.id} {...solution} />
        ))}
        <CtaQuestions>
          <AnchorLink to='/#contact' stripHash>
            <span>
              <Trans>Any questions</Trans>
            </span>
          </AnchorLink>
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
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: var(--color-secondary-darker) ;
  }
`;
