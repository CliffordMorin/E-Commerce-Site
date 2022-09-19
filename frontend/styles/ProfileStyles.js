import styled from "styled-components";

export const Order = styled.div`
  background: white;
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
    color: var(--secondary);
  }
  span {
    font-weight: 300;
  }
`;

export const Wrapper = styled.div`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 50%;
    color: white;
    margin: 2rem;
    cursor: pointer;
  }
`;
