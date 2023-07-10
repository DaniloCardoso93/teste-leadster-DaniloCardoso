import { Button, Flex, Image, Text } from "@chakra-ui/react";

export function SaleBanner() {
  return (
    <Flex
      as="section"
      role="sale_banner"
      w="100%"
      h={{ lg: "50rem" }}
      bg="secondary.4"
      gap={{ base: "5rem", lg: "8rem" }}
      justifyContent="center"
      alignItems="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex justifyContent="center" alignItems="center">
        <Image
          src="comparativo_img_CTA.png"
          alt="Rank Leadster"
          objectFit="cover"
          h={{
            base: "30rem",
            sm: "40rem",
            md: "50rem",
            lg: "40rem",
            xl: "50rem",
          }}
        />
      </Flex>

      <Flex
        w={{ base: "80%", lg: "45rem" }}
        gap="1rem"
        h="25rem"
        direction="column"
      >
        <Flex
          gap="1rem"
          h={"12rem"}
          justifyContent="center"
          direction="column"
          borderBottom={"2px solid #D0DBE3"}
          w={{ base: "30rem", lg: "45rem" }}
        >
          <Text
            letterSpacing=".1rem"
            as="h2"
            fontSize={{ base: "2rem", lg: "3.5rem" }}
          >
            Pronto para triplica sua <Text as="b">Geração de Leads?</Text>
          </Text>
          <Text fontSize={{ base: "1.5rem", lg: "2.1rem" }} as="span">
            Criação e ativação em{" "}
            <Text as="span" fontWeight="bold">
              4 minutos.
            </Text>
          </Text>
        </Flex>

        <Flex gap="2rem">
          <Button variant={"default"}>VER DEMONSTRAÇÃO</Button>
          <Image src="selo_RD.png" alt="Selo RD" objectFit="cover" w="15rem" />
        </Flex>

        <Flex alignItems="center" gap=".5rem">
          <Image
            src="no-card-dark.webp"
            alt="No Card"
            objectFit="cover"
            h="1.5rem"
          />{" "}
          <Text fontSize={{ base: "1.2rem", lg: "1.2rem" }}>
            {" "}
            Não é necessário Cartão de Crédito |{" "}
          </Text>
          <Image src="rating.webp" alt="Rating" w="8rem" />
          <Text fontSize="1.2rem">
            <Text as="b">4.9</Text>/5 média de satisfação
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
