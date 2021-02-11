import React from 'react';
import { Flex, ThemeProvider } from 'theme-ui';
import theme from '../theme/theme';
import Sidebar from './Sidebar';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Flex>
        <Sidebar />
        <Component {...pageProps} />
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
