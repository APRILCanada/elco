import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = ({ title, img, desc }) => {
  const image = getImage(img);

  return (
    <article>
      <Shape>
        <GatsbyImage image={image} alt={title} />
      </Shape>
      <Name>{title}</Name>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  //img: PropTypes.string.isRequired,
  desc: PropTypes.string,
  direction: PropTypes.string
};

export default Card;

const Name = styled.h2`
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: var(--spacing-s);
  line-height: 1.2;
`;

const Shape = styled.div`
  background-color: var(--color-grey-light);
  width: 275px;
  height: 275px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
