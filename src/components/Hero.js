import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { ActionButton } from './Buttons'

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
                <span className="highlight-primary">ELCO</span>
                - Découvrez des solutions d'assurance spécialisées
                <span className="highlight">conçues pour vous.</span>
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
`
const Cta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const MainTitle = styled.h1`
    text-align: right;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`