"use client";

import { Banner } from "@/components/banner";
import LargeWithAppLinksAndSocial from "@/components/footer";
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
      <LargeWithAppLinksAndSocial />
      {/* <Image src="biblioteca-de-videosArtboard-1-copy (2) (1).png" alt="afda" /> */}
    </ChakraProvider>
  );
}
