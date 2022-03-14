import { ComponentStyleConfig } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  defaultProps: {
    variant: "default",
  },
  variants: {
    default: {
      fontWeight: "600",
      fontSize: "36px",
      lineHeight: "40px",
    },
  },
};

export default Heading;
