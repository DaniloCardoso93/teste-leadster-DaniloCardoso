export const buttons = {
  variants: {
    default: {
      bg: "primary.1",
      color: "whiteFixed",
      borderRadius: "5rem",
      width: { base: "12rem", lg: "18rem" },
      height: { base: "5rem" },
      fontSize: { base: "1rem", lg: "1.3rem" },
      _hover: {
        bg: "whiteFixed",
        color: "primary.1",
        border: "1px solid #007eff",
        transition: ".4s linear",
      },
    },
    optionSearch: {
      bg: "whitedFixed",
      color: "#314E5F",
      border: "1px solid #314E5F",
      borderRadius: "5rem",
      minW: { base: "12rem", lg: "8rem" },
      maxW: { base: "12rem", lg: "15rem" },
      height: { base: "3rem" },
      fontSize: { base: "1rem", lg: "1.3rem" },
      _hover: {
        bg: "whiteFixed",
        color: "primary.1",
        border: "1px solid #007eff",
        transition: ".4s linear",
      },
      _focus: {
        bg: "primary.1",
        color: "whiteFixed",
        border: "1px solid primary.1",
      },
    },
  },
};
