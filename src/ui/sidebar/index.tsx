import { Box, Heading, VStack, Link, Tag } from "@chakra-ui/react";
import {
  DashboardIcon,
  HeartIcon,
  GridIcon,
  BellIcon,
} from "@iconicicons/react";

const Sidebar = () => {
  return (
    <Box w="280px" borderRight="1px" borderColor="gray.300">
      <Heading size="md" textAlign="center" bg="white" p="6">
        Mining
      </Heading>
      <VStack p="6" spacing="1">
        <Link variant="sidebar" className="active">
          <DashboardIcon /> Overview
        </Link>
        <Link variant="sidebar">
          <HeartIcon /> Applicants
        </Link>
        <Link variant="sidebar">
          <GridIcon /> Departments
        </Link>
        <Link variant="sidebar">
          <BellIcon /> Notifications{" "}
          <Tag colorScheme="red" borderRadius="full">
            3
          </Tag>
        </Link>
      </VStack>
    </Box>
  );
};

export { Sidebar };
