import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
