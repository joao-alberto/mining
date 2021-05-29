import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { input } from "./input";
import { links } from "./link";

const theme = extendTheme({
  components: {
    Input: input,
    Link: links,
  },
  colors,
  fonts,
});

export { theme };
