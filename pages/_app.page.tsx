import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../components';
import {GlobalStyles, theme} from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>{'Rajiv Jayaweera'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp
