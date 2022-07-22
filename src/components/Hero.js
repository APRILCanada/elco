import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Hero = () => {
    return (
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
                    <button>Contactez-nous</button>
                    <button>1 800-993-7070</button>
                </Buttons>
            </Cta>
        </Section>
    )
}

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