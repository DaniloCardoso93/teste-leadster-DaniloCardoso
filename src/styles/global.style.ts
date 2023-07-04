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
      ".ourTeam-iconWrapper-desk": {
        border: "2px solid",
        borderColor: "whiteFixed",
        borderRadius: "11px",
        p: "1.5rem",
        img: {
          width: "4.6rem",
        },
      },
      ".ourTeam-card": {
        as: "button",
        display: "inline-block",
        width: "23rem",
        background: "whiteFixed",
        transitionDuration: "0.2s",
        ":focus": {
          transform: "scale(1.3)",
        },
      },
    },
  },
});
