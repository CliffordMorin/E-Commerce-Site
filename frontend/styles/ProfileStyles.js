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
  .userName {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  .userEmail {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LogoutBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  button {
    background: var(--card-background);
    border-radius: 1rem;
    padding: 1rem 1rem;
    font-size: 1.3rem;
    width: 20%;
    margin: 1rem auto;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    button {
      margin-bottom: 3rem;
      width: 100%;
    }
  }
`;
