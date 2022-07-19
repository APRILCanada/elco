import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    return (
        <section>
            <StaticImage width={500} height={500} src='../assets/images/hero.jpg' alt='Contact Elco' placeholder='blurred' className='shape-to-right' />
        </section>
    )
}

export default Hero