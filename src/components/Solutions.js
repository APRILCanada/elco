import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
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
        <CtaQuestions>
          <span>Des questions</span>
          <svg width="49" height="72" viewBox="0 0 49 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7394 0.101404C8.69 0.959314 1.34836 8.7682 0.707275 22.8894H14.8799C15.0573 17.9979 17.839 14.3411 23.0183 13.8019C28.1023 13.2722 32.9255 14.4607 34.3863 17.8722C35.9643 21.5575 32.4221 25.8399 30.7379 27.6375C27.6206 30.9708 22.5571 33.4023 19.9325 36.9987C17.3597 40.5228 16.9021 45.1595 16.7041 50.8343H29.1949C29.37 47.2059 29.6163 43.7304 31.2981 41.4755C34.0338 37.8116 38.1193 36.0946 41.5433 33.2009C44.8139 30.4352 48.2547 27.1019 48.839 21.9426C50.5933 6.50137 37.7511 -0.818125 22.7394 0.101404Z" fill="white" />
            <path d="M23.0606 71.122C27.416 71.122 30.9467 67.7091 30.9467 63.4991C30.9467 59.2891 27.416 55.8763 23.0606 55.8763C18.7052 55.8763 15.1744 59.2891 15.1744 63.4991C15.1744 67.7091 18.7052 71.122 23.0606 71.122Z" fill="white" />
          </svg>

        </CtaQuestions>
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
