import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --background-color: ${(props) => props.theme["--background-color"]};
  --primary: ${(props) => props.theme["--primary"]};
  --secondary: ${(props) => props.theme["--secondary"]};
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0rem 7%;
  background: var(--background-color);
}

h2 {
  font-size: 1.2rem;
  color: var(--primary);
}

h3 {
  font-size: 1rem;
  color: var(--secondary);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

p {
  line-height: 150%;
}
`;

export default GlobalStyle;
