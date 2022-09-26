import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductStyle = styled.div`
  background-color: var(--card-background);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
 
  h2{
    padding: 0.5rem 0rem: 
  }
`;

export const ProductImg = styled(motion.img)`
  width: 100%;
  cursor: pointer;
`;
