import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import ShapeIcon from '../assets/icons/shape';

const SectionHeading = ({ children }) => {
    return (
        <Heading>
            <ShapeIcon />
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