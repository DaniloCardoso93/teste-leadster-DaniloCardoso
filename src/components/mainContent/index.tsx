import { optionSearch } from "@/painel";
import { Button, Container, Flex, Select, Text } from "@chakra-ui/react";
import data from "../../../public/data/data.json";
import { CardPagination } from "./card";

export function MainContentt() {
  return (
    <Flex
      w="100%"
      h={{ base: "60rem", md: "55rem", lg: "45rem", xl: "100rem" }}
      m="5rem auto"
      align="center"
      direction="column"
      gap="2rem"
    >
      <Flex
        gap="2rem"
        w={{ base: "30rem", md: "46rem", lg: "95rem", xl: "120rem" }}
        wrap="wrap"
        justify="space-between"
        align="center"
      >
        <Flex gap="2rem" wrap="wrap">
          {optionSearch.map((element, i) => {
            return (
              <Button variant="optionSearch" key={i}>
                {element}
              </Button>
            );
          })}
        </Flex>

        <Flex gap="2rem" w="22rem" fontSize="1.2rem">
          <Text as="b" fontSize="1.3rem">
            Ordenar por
          </Text>
          <Select w="12rem">
            <option>Data de Publicação</option>
          </Select>
        </Flex>
      </Flex>

      <Container
        borderTop="1px solid #D0DBE3"
        maxW={{ base: "34rem", md: "46rem", lg: "95rem", xl: "120rem" }}
      >
        <CardPagination items={data} />
      </Container>
    </Flex>
  );
}
