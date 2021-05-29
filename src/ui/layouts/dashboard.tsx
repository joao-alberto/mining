import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@iconicicons/react";
import { Sidebar } from "@ui/sidebar";

const Layout = ({ title = "", children }) => {
  return (
    <Flex w="100vw" height="100vh" bg="white">
      <Sidebar />
      <Flex flex="1" bg="gray.100" flexDirection="column">
        <Box
          w="100%"
          borderBottom="1px"
          borderColor="gray.300"
          bg="white"
          p="6"
        >
          <Box w="280px">
            <InputGroup>
              <InputLeftElement
                sx={{
                  "& path": {
                    stroke: "gray.300",
                  },
                }}
              >
                <SearchIcon />
              </InputLeftElement>
              <Input variant="search" placeholder="Search everything" />
            </InputGroup>
          </Box>
        </Box>
        <Flex flex="1" bg="gray.100" p="12" flexDirection="column">
          <Heading color="gray.500">{title}</Heading>
          <VStack spacing="8" mt="8" width="100%">
            {children}
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Layout };
