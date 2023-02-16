import React from 'react';
import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import styled from 'styled-components';
import media from '../styles/breakpoints';

const LanguageSelector = () => {
  const { languages, language, originalPath } = useI18next();

  return (
    <ToggleButton>
      {languages.map(lang => {
        return (
          <SelectedItem key={lang} lang={language}>
            <SelectLink to={originalPath} language={lang}>
              {lang === 'fr' ? 'FR' : 'EN'}
            </SelectLink>
          </SelectedItem>
        );
      })}
    </ToggleButton>
  );
};

export default LanguageSelector;

// CSS
const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 25px;
  height: 25px;
  border-bottom: 1px solid var(--color-white);
  overflow: hidden;
  margin-left: var(--spacing-m);
  margin-top: var(--spacing-l);

  ${media.s`
    color: var(--color-heading);
    font-weight: normal;
    border-bottom: 1px solid var(--color-heading);
    margin-right: var(--spacing-m);
    margin-top: initial;
   `}
`;

const SelectedItem = styled.div`
  width: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  text-transform: uppercase;
  transform: ${({ lang }) => (lang === 'fr' ? 'translateX(-25px)' : 'translateX(0px)')};
  transition: transform 200ms linear;
`;

const SelectLink = styled(Link)`
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: normal;

  ${media.s`
    color: var(--color-heading);
    font-size: initial;
   `}
`;
