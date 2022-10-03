import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.nav)`
  min-height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--text-color-light);
  a {
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    a {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  h3 {
    font-size: 0.75rem;
    padding: 0.25rem;
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    align-self: center;
  }
  span {
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    font-weight: 700;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    margin-bottom: 0rem;

    div {
      margin-left: 0;
      position: relative;
    }
  }
`;

export const CartLogo = styled(motion.div)``;

export const SwitchStyles = styled.label`
  position: absolute;
  right: 0;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  h3 {
    font-size: 0.75rem;
  }

  .sunIcon {
    font-size: 1.5rem;
    color: #f7db70;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  .moonIcon {
    font-size: 1.3rem;
    color: #fff;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }

  .starsIcon {
    font-size: 2rem;
    color: #fff;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
  }

  .cloudyIcon {
    font-size: 1rem;
    color: #fff;
    margin-top: 0.7rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0.5rem;
    right: -1rem;
    h3 {
      font-size: 0.6rem;
      text-align: center;
    }
  }
`;

export const ToastBtn = styled(motion.button)`
  background: none;

  font-size: 2.5rem;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  grid-area: button;
  svg {
    margin-top: 0.2rem;
    margin-left: 1rem;
    color: var(--secondary);
  }
`;

export const ToastStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "text button";

  p {
    grid-area: text;
    border-right: 0.1rem solid var(--secondary);
    color: var(--primary);
  }
`;
