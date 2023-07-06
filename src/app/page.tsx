"use client";

import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { SaleBanner } from "@/components/saleBanner";
import { theme } from "@/styles/global.style";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Header />
      <main>
        <Banner />
        <Box h="10rem" bg={"whiteFixed"}></Box>
        <SaleBanner />
      </main>
    </ChakraProvider>
  );
}
