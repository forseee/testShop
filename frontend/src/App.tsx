import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "src/assets/styles/theme";
import AnimationBg from "src/components/AnimationBg";
import Router from "src/Router";
import { GlobalStyle } from "./assets/styles/globals";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AnimationBg />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
