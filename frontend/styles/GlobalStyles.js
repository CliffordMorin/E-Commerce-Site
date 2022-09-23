import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --background-color: ${(props) => props.theme["--background-color"]};
  --primary: ${(props) => props.theme["--primary"]};
  --secondary: ${(props) => props.theme["--secondary"]};
  --card-background: ${(props) => props.theme["--card-background"]};
  --text-color: ${(props) => props.theme["--text-color"]};
  --text-color-light: ${(props) => props.theme["--text-color-light"]};
  ---text-color-dark: ${(props) => props.theme["--text-color-dark"]};
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0rem 7%;
  background: var(--background-color);
  transition: all .5s ease;

  @media (max-width: 768px) {
    margin: 0rem 2%;
  }
}



h1{
  
}
h2 {
  font-size: 1.2rem;
  color: var(--primary);
  transition: all 0.5s ease;
}

h3 {
  font-size: 1rem;
  color: var(--secondary);
  transition: all 0.5s ease;
}

a {
  color: inherit;
  text-decoration: none;
  color: var(--primary);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

button{
  background: var(--card-background);
  color: var(--primary);
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

p {
  line-height: 150%;
  color: var(--primary);
}
`;

export default GlobalStyle;
