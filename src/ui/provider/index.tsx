import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@ui/theme";

const Provider: FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { Provider };
