import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "gray.700",
  },
  variants: {
    header: {
      fontSize: "20px",
      fontWeight: "600",
    },
  },
};

export default Text;
