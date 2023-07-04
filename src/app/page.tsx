"use client";

import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { theme } from "@/styles/global.style";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Header />
      <main>
        <Banner />
      </main>
    </ChakraProvider>
  );
}
