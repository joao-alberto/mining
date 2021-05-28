import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@iconicicons/react";

const Signin = ({}) => {
  return (
    <Flex
      w="100vw"
      height="100vh"
      bg="gray.100"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="400px"
        bg="white"
        p="6"
        rounded="xl"
        border="1px"
        borderColor="gray.300"
      >
        <Heading textAlign="center">Sign up</Heading>
        <VStack mt="16" spacing="4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Flex w="100%" alignItems="center" justifyContent="space-between">
            <Link>Sign in</Link>
            <Button
              variant="solid"
              colorScheme="brand"
              rightIcon={<ArrowRightIcon />}
            >
              Sign up
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signin;
