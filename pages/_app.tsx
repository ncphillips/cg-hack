import React from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalFont } from "@careguide/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
