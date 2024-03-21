
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Nav/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
