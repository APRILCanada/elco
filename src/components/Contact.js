import React from 'react'
import { Trans } from 'react-i18next'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import SectionHeading from './SectionHeading'

const Contact = () => (
    <Section>
        <SectionHeading id="contact"><Trans>Contact us!</Trans></SectionHeading>
        <ContactForm />
    </Section>
)

export default Contact

const Section = styled.section`
  max-width: var(--max-content);
  margin: 0 auto;
`;