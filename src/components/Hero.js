import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { ActionButton } from './Buttons';
import media from '../styles/breakpoints';
import { motion } from 'framer-motion';
import { Trans } from 'gatsby-plugin-react-i18next';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Hero = () => {
  return (
    <Section>
      <StaticImage src='../assets/images/hero.jpg' width={500} height={500} alt='Contact Elco' placeholder='blurred' className='shape-to-right' />
      <Cta initial={'start'} animate={'end'} transition={{ staggerChildren: 0.5 }}>
        <MainTitle variants={headingAnimate}>
          <span className='highlight-primary'>ELCO </span>- <Trans>Discover specialized insurance solutions</Trans>
          <br />
          <span className='highlight'>
            {' '}
            <Trans>designed for you</Trans>.
          </span>
        </MainTitle>
        <Buttons variants={buttonFadeIn}>
          <ActionButton>
            <AnchorLink to='/#contact' stripHash>
              <Trans>Contact us</Trans>
            </AnchorLink>
          </ActionButton>
          <ActionButton outlined="true">
            <StaticImage src='../assets/icons/phone.png' width={20} height={20} alt='Call Elco' placeholder='blurred' style={{ marginRight: 'var(--spacing-s)' }} />
            <span>1 800-993-7070</span>
          </ActionButton>
        </Buttons>
      </Cta>
    </Section>
  );
};

export default Hero;

//css
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.s`
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
  `}
`;
const Cta = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > * {
    margin-top: var(--spacing-m);
  }

  ${media.s`
        margin-left: var(--spacing-m);
        max-width: 50%;
  `}
`;

const MainTitle = styled(motion.h1)`
  text-align: right;
  max-width: 500px;

  ${media.s`
        text-align: left;
        max-width: 800px;
  `}
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  ${media.xs`
        flex-direction: row;
        justify-content: flex-end;

        & > * {
            margin-left: var(--spacing-m);
        }
  `}

  ${media.s`
        flex-direction: column;
        align-items: flex-start;
    `}

    ${media.m`
        flex-direction: row;
        justify-content: flex-start;

        & > * {
            margin-top: var(--spacing-m);
            margin-right: var(--spacing-m);
            margin-left: 0px;
        }
  `}
`;

// animations
const headingAnimate = {
  start: { opacity: 0, x: 50 },
  end: { opacity: 1, x: 0, transition: { type: 'easeIn', duration: 1 } }
};

const buttonFadeIn = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { type:'easeIn', duration: 0.5 } }
};
