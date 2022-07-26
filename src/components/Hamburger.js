import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import media from "../styles/breakpoints";

const Path = props => {
    console.log('props', props)
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="white"
            strokeLinecap="round"
            {...props}
        />
    );
}


const Hamburger = ({ toggle }) => (
    <Button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </Button>
);

export default Hamburger


// CSS
const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--color-tertiary);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 112;

  ${media.s`
    display: none;
  `}
`