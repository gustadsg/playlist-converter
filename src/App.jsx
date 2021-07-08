import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./themes";
import { Home } from "./pages";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
