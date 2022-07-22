import styled from 'styled-components'
import media from '../styles/breakpoints'

export const ActionButton = styled.button`
  background-color: ${({ outlined }) => outlined ? "var(--color-white)" : "var(--color-secondary)"};
  border: 1px solid var(--color-secondary);
  color: ${({ outlined}) => outlined ? "var(--color-secondary)" : "var(--color-white)"};
  font-family: var(--font);
  font-size: 1.2rem;
  font-weight: bold;
  padding: var(--spacing-s) var(--spacing-m);
  text-transform: uppercase;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 200px;
  min-height: 40px;

  /* ${media.s`
    font-size: 1.5rem;
  `} */
`