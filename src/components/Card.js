import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next'


const Card = ({ title, img, desc, direction = "left" }) => {
  const image = getImage(img);
  const { language: lang } = useI18next()

  const directionTable = {
    "left": { borderRadius: '50% 50% 50% 0' },
    "right": { borderRadius: '50% 50% 0 50%' },
    "none" : {}
  } 

  return (
    <article>
      <Shape direction={direction}>
        <GatsbyImage image={image} alt={title[lang]} imgStyle={ directionTable[direction] } />
      </Shape>
      <Name direction={direction}>{title[lang]}</Name>
      <Description direction={direction}>{desc && desc[lang]}</Description>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  desc: PropTypes.object,
  direction: PropTypes.string
};

export default Card;

// CSS
const Shape = styled.div`
  background-color: var(--color-grey-light);
  width: 275px;
  height: 275px;
  overflow: hidden;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ direction }) =>
    direction === "right" &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 50%;
    `}
`;

const Name = styled.h2`
  text-align: ${({ direction }) => direction};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: var(--spacing-s);
  line-height: 1.2;
`;

const Description = styled.p`
  text-align: ${({ direction }) => direction};
  line-height: 1.2;
`
