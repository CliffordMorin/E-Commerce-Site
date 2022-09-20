// import "../styles/globals.css";
import GlobalStyle from "../styles/GlobalStyles";
import { Provider, createClient } from "urql";
import Nav from "../components/Nav";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import themes from "../lib/darkLight";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <UserProvider>
          <StateContext>
            <Provider value={client}>
              <Toaster />
              <Nav theme={theme} setTheme={setTheme} />
              <Component {...pageProps} />
            </Provider>
          </StateContext>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
