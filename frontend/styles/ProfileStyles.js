import styled from "styled-components";

export const Order = styled.div`
  background: var(--card-background);
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 1rem;
  }
  span {
    font-weight: 300;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    h1 {
      font-size: 0.8rem;
    }
    h2 {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Wrapper = styled.div`
  button {
    padding: 1rem 2rem;
    width: 50%;

    margin-left: 16rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    button {
      margin: 0;
      margin-bottom: 1rem;
      width: 100%;
    }
  }
`;
