import React from 'react'
import styled from 'styled-components'

const Alert = ({ children }) => (
    <Box>
        {children}
    </Box>
)

export default Alert

// CSS
const Box = styled.div`
    width: 100%;
    background-color: var(--color-success);
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