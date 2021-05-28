import { theme, ChakraProvider } from "@chakra-ui/react";

const Provider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { Provider };
