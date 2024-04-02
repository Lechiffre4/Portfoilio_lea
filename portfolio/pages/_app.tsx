
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import Sidebar from "../components/sidebar"

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider>
      <Sidebar/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
