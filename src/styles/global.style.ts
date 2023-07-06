import { extendTheme } from "@chakra-ui/react";
import { buttons } from "./buttons.style";
import { colors } from "./colors.style";

export const theme = extendTheme({
  colors,
  components: {
    Button: buttons,
  },
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
