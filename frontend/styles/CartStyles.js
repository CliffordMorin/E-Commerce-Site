import styled from "styled-components";
//import framer-motion, need to import differently with next.js
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const ExitOut = styled(motion.div)`
  height: 60px;
  width: 60px;
  z-index: 100;
  border-radius: 5px;
  position: relative;
  right: 15px;
  bottom: 25px;

  svg {
    font-size: 3rem;
    color: var(--secondary);
    position: relative;
    top: 6px;
    left: 6px;
  }
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background: var(--background-color);
  padding: 2rem 1rem;
  overflow-y: scroll;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  overflow: hidden;
  background: var(--card-background);
  margin: 2rem 0rem;
  img {
    width: 8rem;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  /* For the empty cart */
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--card-background);
    padding: 1rem 2rem;
    width: 100%;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export const Cards = styled(motion.div)``;
