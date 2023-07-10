import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useState } from "react";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";

export const CardPagination: React.FC<IItemListProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCard, setSelectedCard] = useState<IItemList | null>(null);

  const onClick = (item: IItemList) => {
    setSelectedCard(item);
    onOpen();
  };

  return (
    <>
      <Flex
        gap={6}
        marginTop="2.5rem"
        borderBottom="1px solid #D0DBE3"
        maxH={{ base: "75rem", lg: "91rem" }}
        overflowX="auto"
        wrap={{ base: "nowrap", xl: "wrap" }}
      >
        {currentItems.map((item, i) =>
          currentItems.length - 1 === i ? (
            <Flex
              key={item.id}
              borderRadius={"5rem"}
              cursor="pointer"
              onClick={() => onClick(item)}
              mb="3.5rem"
              maxW={"37rem"}
            >
              {
                <Card
                  boxShadow="0px 5px 20px -2px rgba(0,0,0,0.5)"
                  w={{ base: "30rem", xl: "35rem" }}
                  h="28rem"
                  borderRadius="5rem"
                >
                  <Image
                    borderTopRadius="5rem"
                    src={item.image}
                    alt="Imagem"
                    objectFit="cover"
                  />
                  <Text
                    m="0 4rem"
                    wordBreak="break-word"
                    fontWeight="semibold"
                    fontSize="1.4rem"
                  >
                    {item.comment}
                  </Text>
                </Card>
              }
            </Flex>
          ) : (
            <Flex
              key={item.id}
              borderRadius={"5rem"}
              cursor="pointer"
              onClick={() => onClick(item)}
              w={"37rem"}
            >
              {
                <Card
                  boxShadow="0px 5px 20px -2px rgba(0,0,0,0.5)"
                  w={{ base: "30rem", xl: "35rem" }}
                  h="28rem"
                  borderRadius="5rem"
                >
                  <Image
                    borderTopRadius="5rem"
                    src={item.image}
                    alt="Imagem"
                    objectFit="cover"
                  />
                  <Text
                    m="0 4rem"
                    wordBreak="break-word"
                    fontWeight="semibold"
                    fontSize="1.4rem"
                  >
                    {item.comment}
                  </Text>
                </Card>
              }
            </Flex>
          )
        )}
      </Flex>

      <Flex mt={6} justify="center" align="center" gap="1rem">
        <Text fontSize="1.5rem">Página</Text>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            fontSize="1.5rem"
            fontWeight="normal"
            colorScheme={currentPage === index + 1 ? "blue" : "gray"}
            border={currentPage === index + 1 ? "1px solid #007eff" : "none"}
            bg="transparent"
            color={currentPage === index + 1 ? "#007eff" : "black"}
            _hover={{ color: "blue", border: "1px solid #96d0fb" }}
            onClick={() => handlePagination(index + 1)}
            mr={2}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay h="100%" w="100%" bg="rgba(124, 140, 152, 0.8)" />
        <ModalContent
          borderRadius="2rem"
          borderTop="4px solid #007EFF"
          h={{ base: "65rem", md: "58rem", lg: "60rem" }}
          maxW={{ base: "34rem", md: "50rem", lg: "50rem" }}
        >
          <ModalCloseButton />
          <ModalHeader>
            <Text
              fontSize="1.5rem"
              display="inline-block"
              color="primary.1"
              wordBreak="break-all"
            >
              Webinar:
            </Text>{" "}
            {selectedCard && selectedCard.comment}
          </ModalHeader>
          <ModalBody>
            {selectedCard && (
              <>
                <iframe
                  src={selectedCard.video}
                  width="100%"
                  height="350rem"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
                />
                <Text fontSize="1.4rem" fontWeight="bold">
                  Descrição
                </Text>
                <Box borderTop="1px solid #9E9AB5">
                  <Text fontWeight="semibold" fontSize="1.4rem">
                    {selectedCard.description}
                  </Text>
                </Box>
                <Text fontSize="1.4rem" fontWeight="bold">
                  Downloads
                </Text>

                <Flex borderTop="1px solid #9E9AB5" gap="1rem">
                  <Flex mt="1rem">
                    <Flex h="100%" bg="spreadsheet.1" align="center">
                      <LiaCloudDownloadAltSolid color="#4CCDAD" size="2rem" />
                    </Flex>
                    <Flex h="100%" align="center">
                      <Button
                        minW="100%"
                        bg="spreadsheet.3"
                        color="spreadsheet.4"
                        fontSize="1.2rem"
                      >
                        Spreadsheet.xls
                      </Button>
                    </Flex>
                  </Flex>

                  <Flex mt="1rem">
                    <Flex h="100%" bg="document.1" align="center">
                      <LiaCloudDownloadAltSolid color="#3598F1" size="2rem" />
                    </Flex>
                    <Flex h="100%" align="center">
                      <Button
                        minW="100%"
                        bg="document.3"
                        color="document.4"
                        fontSize="1.2rem"
                      >
                        Document.doc
                      </Button>
                    </Flex>
                  </Flex>

                  <Flex mt="1rem">
                    <Flex h="100%" bg="presentation.1" align="center">
                      <LiaCloudDownloadAltSolid color="#BBA43A" size="2rem" />
                    </Flex>
                    <Flex h="100%" align="center">
                      <Button
                        minW="100%"
                        bg="presentation.3"
                        color="presentation.4"
                        fontSize="1.2rem"
                      >
                        Presentation.ppt
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </>
            )}
          </ModalBody>

          <ModalBody
            display={{ base: "none", lg: "flex" }}
            position="fixed"
            bottom={{ lg: "0" }}
            left={{ lg: "0" }}
            w="17rem"
            minH="20rem"
            bg="whiteFixed"
          >
            {selectedCard && (
              <Flex direction="column" justify="center" gap="1rem">
                <Flex>
                  <Flex h="100%" bg="spreadsheet.1" align="center">
                    <LiaCloudDownloadAltSolid color="#4CCDAD" size="2rem" />
                  </Flex>
                  <Flex h="100%" align="center">
                    <Button
                      minW="100%"
                      bg="spreadsheet.3"
                      color="spreadsheet.4"
                      fontSize="1.2rem"
                    >
                      Spreadsheet.xls
                    </Button>
                  </Flex>
                </Flex>

                <Flex>
                  <Flex h="100%" bg="document.1" align="center">
                    <LiaCloudDownloadAltSolid color="#3598F1" size="2rem" />
                  </Flex>
                  <Flex h="100%" align="center">
                    <Button
                      minW="100%"
                      bg="document.3"
                      color="document.4"
                      fontSize="1.2rem"
                    >
                      Document.doc
                    </Button>
                  </Flex>
                </Flex>

                <Flex>
                  <Flex h="100%" bg="presentation.1" align="center">
                    <LiaCloudDownloadAltSolid color="#BBA43A" size="2rem" />
                  </Flex>
                  <Flex h="100%" align="center">
                    <Button
                      minW="100%"
                      bg="presentation.3"
                      color="presentation.4"
                      fontSize="1.2rem"
                    >
                      Presentation.ppt
                    </Button>
                  </Flex>
                </Flex>

                <Flex>
                  <Flex h="100%" bg="folder.1" align="center">
                    <LiaCloudDownloadAltSolid color="#85929B" size="2rem" />
                  </Flex>
                  <Flex h="100%" align="center">
                    <Button
                      minW="100%"
                      bg="folder.3"
                      color="folder.4"
                      fontSize="1.2rem"
                    >
                      Folder.zip
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const getStaticProps: GetStaticProps<IItemListProps> = async () => {
  const response = await fetch("/data/data.json");
  const items: IItemList[] = await response.json();

  return {
    props: {
      items,
    },
  };
};
