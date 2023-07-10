import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex as="section" role="banner" w="100%" h="40rem" bg="secondary.4">
      <Container
        maxW="120rem"
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap=".5rem"
      >
        <Flex
          borderRightRadius={"15px"}
          borderTopRadius={"15px"}
          border={"2px solid #2197ff"}
          w="17rem"
          h="3rem"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color={"#007eff"}
            letterSpacing={"0.001rem"}
            fontWeight={"bold"}
            fontSize="1.2rem"
          >
            WEBINARS EXCLUSIVOS
          </Text>
        </Flex>

        <Flex
          position="relative"
          justifyContent="center"
          alignItems="center"
          direction="column"
          borderBottom={"1px solid #D0DBE3"}
        >
          <Heading fontSize={{ base: "2rem", sm: "3.2rem" }}>
            Menos Conversinha,
          </Heading>
          <Heading
            fontSize={{ base: "4rem", sm: "5.5rem", lg: "6.2rem" }}
            color="secondary.1"
          >
            Mais Conversão
          </Heading>
          <Image
            position="absolute"
            top={{ base: "3.5rem", sm: "5.5rem", md: "5rem" }}
            right={{ base: "-1rem", sm: "-.8rem" }}
            src="asset-header.png"
            alt="Leadster"
            h={{ base: "1.5rem", sm: "1.8rem" }}
          />
        </Flex>
        <Text fontSize={{ base: ".9rem", sm: "1.1rem", lg: "1.3rem" }}>
          Conheça as estratégias que{" "}
          <Text as="span" fontWeight="bold">
            mudaram o jogo
          </Text>{" "}
          e como aplicá-las no seu negócio.
        </Text>
      </Container>
    </Flex>
  );
}
