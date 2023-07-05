import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors.style";

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      ":root": {
        fontSize: "10px",
      },
      body: {
        fontSize: "1.6rem",
        lineHeight: "3rem",
      },
    },
  },
});
