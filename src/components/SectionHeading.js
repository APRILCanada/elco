import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import ShapeIcon from '../assets/icons/shape';

const SectionHeading = ({ children, id }) => (
    <Heading id={id}>
        <ShapeIcon />
        {children}
    </Heading>
)


Heading.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
};

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