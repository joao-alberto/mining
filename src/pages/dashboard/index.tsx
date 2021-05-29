import {
  Flex,
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@iconicicons/react";
import { Sidebar } from "@ui/sidebar";

const Dashboard = () => {
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
          <Heading color="gray.500">Dashboard overview</Heading>
          <VStack spacing="8" mt="8">
            <HStack w="100%" spacing="4">
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                border="1px"
                borderColor="gray.300"
                borderRadius="12"
                bg="white"
                w="200px"
                p="6"
              >
                <Text color="gray.700" fontSize="4xl" fontWeight="bold">
                  19
                </Text>
                <Text color="gray.500">Open positions</Text>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                border="1px"
                borderColor="gray.300"
                borderRadius="12"
                bg="white"
                w="200px"
                p="6"
              >
                <Text color="gray.700" fontSize="4xl" fontWeight="bold">
                  67
                </Text>
                <Text color="gray.500">Applicants</Text>
              </Flex>
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
