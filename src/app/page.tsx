"use client";

import { Banner } from "@/components/banner";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { MainContentt } from "@/components/mainContent";
import { SaleBanner } from "@/components/saleBanner";
import { theme } from "@/styles/global.style";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Header />
      <main>
        <Banner />
        <MainContentt />
        <SaleBanner />
      </main>
      <Footer />
    </ChakraProvider>
  );
}
