import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SessionProvider from "./contexts/session";
import GlobalStyle from "./GlobalStyle";
import theme from "./themes";
import { Home } from "./pages";

function App() {
  return (
    <>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Route path="/" exact component={Home} />
          </BrowserRouter>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default App;
