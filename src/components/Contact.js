import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <Section>
            <ContactForm />
        </Section>
    )
}

export default Contact

const Section = styled.section`
  max-width: var(--max-content);
  margin: 0 auto;
`;