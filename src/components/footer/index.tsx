import {
  Box,
  Container,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { TfiInstagram } from "react-icons/tfi";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const TitleList = ({ children }: { children: ReactNode }) => {
  return (
    <Heading fontSize={"1.5rem"} mb={2}>
      {children}
    </Heading>
  );
};

const ListFooter = ({ children }: { children: ReactNode }) => {
  return (
    <Link href="#" color="#9E9AB5">
      {children}
    </Link>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <>
      <Box>
        <Flex align="center" mt="3rem" direction="column" gap="2rem">
          <Image w="20rem" src="logo.png" alt="Logo" objectFit="cover" />
          <Text as="sup" fontSize="1.3rem" color="#9E9AB5">
            Transformando visitantes em clientes.
          </Text>
        </Flex>
        <Container as={Stack} maxW={"120rem"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={20}>
            <Stack align={"flex-start"}>
              <TitleList>Links Principais</TitleList>
              <ListFooter>Home</ListFooter>
              <ListFooter>Ferramenta</ListFooter>
              <ListFooter>Preços</ListFooter>
              <ListFooter>Contato</ListFooter>
            </Stack>

            <Stack align={"flex-start"}>
              <TitleList>Cases</TitleList>
              <ListFooter>Geração de Leads B2B</ListFooter>
              <ListFooter>Geração de Leads em Software</ListFooter>
              <ListFooter>Geração de Leads em Imobiliária</ListFooter>
              <ListFooter>Cases de Sucesso</ListFooter>
            </Stack>

            <Stack align={"flex-start"}>
              <TitleList>Materiais</TitleList>
              <ListFooter>Blog</ListFooter>
              <ListFooter>Parceria com Agências</ListFooter>
              <ListFooter>TGuia Definitivo do Marketing</ListFooter>
              <ListFooter>Materiais Gratuitos</ListFooter>
            </Stack>

            <Stack align={"flex-start"}>
              <TitleList>Siga a Leadster</TitleList>
              <Flex gap="1.5rem">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  w="5rem"
                  h="5rem"
                  bg="#F7F8FB"
                  cursor="pointer"
                >
                  <TiSocialLinkedin />
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  w="5rem"
                  h="5rem"
                  bg="#F7F8FB"
                  cursor="pointer"
                >
                  <TiSocialFacebook />
                </Flex>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  w="5rem"
                  h="5rem"
                  bg="#F7F8FB"
                  cursor="pointer"
                >
                  <TfiInstagram />
                </Flex>
              </Flex>

              <Text>
                <Highlight
                  query="contato@leadster.com.br"
                  styles={{ color: "#9E9AB5" }}
                >
                  E-mail: contato@leadster.com.br
                </Highlight>
              </Text>
              <Text>
                <Highlight
                  query="(42) 98828-9851"
                  styles={{ color: "#9E9AB5" }}
                >
                  Telefone: (42) 98828-9851
                </Highlight>
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"120rem"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>
              Copyright © 2015 - 2022 Todas os direitos reservados |{" "}
              <Link color="secondary.2">Leadster</Link>
            </Text>
            <Text color="#9E9AB5">
              Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
              Termo de uso
            </Text>
            <Stack direction={"row"} spacing={6}></Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
