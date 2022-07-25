import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { ActionButton } from './Buttons'
import media from '../styles/breakpoints'


const Hero = () => (
    <Section>
        <StaticImage
            src='../assets/images/hero.jpg'
            width={500}
            height={500}
            alt='Contact Elco'
            placeholder='blurred'
            className='shape-to-right'
        />
        <Cta>
            <MainTitle>
                <span className="highlight-primary">ELCO </span>
                - Découvrez des solutions d'assurance spécialisées<br />
                <span className="highlight"> conçues pour vous.</span>
            </MainTitle>
            <Buttons>
                <ActionButton>Contactez-nous!</ActionButton>
                <ActionButton outlined>
                    <StaticImage
                        src='../assets/icons/phone.png'
                        width={20}
                        height={20}
                        alt='Call Elco'
                        placeholder='blurred'
                        style={{ marginRight: "var(--spacing-s)" }}
                    />
                    <span>1 800-993-7070</span>
                </ActionButton>
            </Buttons>
        </Cta>
    </Section>
)

export default Hero


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
`
const Cta = styled.div`
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
`

const MainTitle = styled.h1`
    text-align: right;
    max-width: 500px;

    ${media.s`
        text-align: left;
        max-width: 800px;
  `}
`

const Buttons = styled.div`
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
`