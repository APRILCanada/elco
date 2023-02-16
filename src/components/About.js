import React from 'react';
import styled from 'styled-components';
import media from '../styles/breakpoints';
import { StaticImage } from 'gatsby-plugin-image';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Wrapper>
        <ColImg>
          <StaticImage src='../assets/icons/lightbulb.png' alt='About' width={185} height={185} placeholder='tracedSVG' loading='lazy' />
        </ColImg>

        <ColText>
          <Heading>
            <Trans>Since 1992, ELCO has been striving to assist its clients in their search for</Trans>
            <span className='highlight'> <Trans>specialized insurance solutions.</Trans></span>
          </Heading>
          <Paragraph>{t('expertise')}</Paragraph>
          <Paragraph>{t('ambition')}</Paragraph>
        </ColText>
      </Wrapper>
    </Section>
  )
}

export default About;


// CSS
const isBrowser = typeof window !== "undefined"
// Calculate the value of the scrollbar width to avoid horizontal scrolling
const scrollbarWidth = isBrowser ? window.innerWidth - document.body.clientWidth + 0.5 : '16.5px'
document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`);


const Section = styled.section`
  /* make the section full-bleed despite the <main> width being 1380px, and without any horizontal scrolling */
  width: calc(100vw - var(--scrollbarWidth));
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
`;

/* constrains the content of the section */
const Wrapper = styled.div`
  max-width: var(--max-content);
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
