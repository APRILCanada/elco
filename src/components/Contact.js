import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'

const Contact = () => (
    <Section>
        <SectionHeading id="contact">Contactez-nous!</SectionHeading>
        <ContactForm />
    </Section>
)

export default Contact

const Section = styled.section`
  max-width: var(--max-content);
  margin: 0 auto;
`;