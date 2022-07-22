import styled from 'styled-components'

export const ActionButton = styled.button`
  background-color: ${({ outlined }) => outlined ? "var(--color-white)" : "var(--color-secondary)"};
  border: 1px solid var(--color-secondary);
  color: ${({ outlined }) => outlined ? "var(--color-secondary)" : "var(--color-white)"};
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
  box-shadow: ${({ outlined }) => outlined ? "none" : "0px 4px 12px rgba(0, 0, 0, 0.3)"};
`