import styled from 'styled-components'

export const ActionButton = styled.button`
  background-color: ${({ outlined }) => outlined ? "var(--color-white)" : "var(--color-secondary)"};
  border: 1px solid var(--color-secondary);
  color: ${({ outlined }) => outlined ? "var(--color-secondary)" : "var(--color-white)"};
  font-family: var(--font);
  font-size: 1rem;
  font-weight: bold;
  padding: var(--spacing-s) var(--spacing-m);
  text-transform: uppercase;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  min-width: 200px;
  min-height: 40px;
  box-shadow: ${({ outlined }) => outlined ? "none" : "var(--box-shadow-btn)"};
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${({ outlined }) => !outlined && "var(--color-secondary-darker)"};
    border: ${({ outlined }) => !outlined && "1px solid var(--color-secondary-darker)"};
    box-shadow:  ${({ outlined }) => outlined && "var(--box-shadow-btn)"};
  }
`