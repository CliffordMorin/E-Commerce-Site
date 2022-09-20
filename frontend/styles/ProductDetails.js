import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
    img {
      width: 100%;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  h2 {
    font-size: 2rem;
    margin: 1rem 0rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
    padding: 0rem 0.5rem;
    cursor: pointer;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: var(--secondary);
  }
`;

export const Buy = styled.button`
  width: 100%;
  font-weight: 500;
`;
