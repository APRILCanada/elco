import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Alert = ({ children, type }) => (
    <Box type={type}>
        {children}
    </Box>
)

export default Alert

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired
}

// CSS
const Box = styled.div`
    width: 100%;
    background-color: ${({ type }) => {
        if (type === "success") return "var(--color-success)";
        if (type === "error") return "var(--color-error)"
    }};
    color: var(--color-white);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 111;
    padding: var(--spacing-s);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    & > svg {
        margin-right: var(--spacing-s);
    }
`