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
            <MainTitle>ELCO - Découvrez des solutions d'assurance spécialisées conçues pour vous.</MainTitle>
            <Buttons>
                <ActionButton>Contactez-nous</ActionButton>
                <ActionButton outlined>1 800-993-7070</ActionButton>
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