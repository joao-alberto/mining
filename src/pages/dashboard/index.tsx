import { Flex, HStack, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
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
  );
};

const getServerSideProps = async () => {
  return {
    props: {
      title: "Dashboard overview",
    },
  };
};

export { getServerSideProps };
export default Dashboard;
