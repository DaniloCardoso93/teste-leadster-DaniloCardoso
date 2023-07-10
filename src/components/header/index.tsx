import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" w="100%" h="12rem" justifyContent="center" align="center">
      <Image src="logo.png" alt="Leadster Logo" objectFit="cover" />
    </Flex>
  );
}
