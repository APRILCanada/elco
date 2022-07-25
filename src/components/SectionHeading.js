import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SectionHeading = ({ children }) => {
    return (
        <Heading>
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30C1 13.9837 13.9837 1 30 1H32C48.0163 1 61 13.9837 61 30V61H30C13.9837 61 1 48.0163 1 32V30Z" fill="#013D62" stroke="#013D62" strokeWidth="2" />
            </svg>
            {children}
        </Heading>
    )
}

export default SectionHeading

// CSS
const Heading = styled.h2`
  color: var(--color-heading);
  text-transform: uppercase;
  margin-bottom: var(--spacing-l);
  font-size: 2rem !important;

  svg {
    margin-right: var(--spacing-s);
}
`

Heading.propTypes = {
    children: PropTypes.node.isRequired
};