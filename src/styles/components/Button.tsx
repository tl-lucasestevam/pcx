import { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: "default",
  },
  variants: {
    default: {
      h: "4rem",
      bg: "red.500",
      borderRadius: "0px",
      fontFamily: "Inter",
      fontSize: "1rem",
      lineHeight: "20px",
      color: "white",
      border: "2px solid",
      borderColor: "red.500",
      transition: "all 0.3s",
      _disabled: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      _hover: {
        bg: "red.400",
        borderColor: "red.400",
        cursor: "pointer",
        _disabled: {
          bg: "red.500",
          borderColor: "red.500",
        },
      },
    },
    gray: {
      h: "4rem",
      bg: "gray.700",
      borderRadius: "0px",
      fontFamily: "Inter",
      fontSize: "1rem",
      lineHeight: "20px",
      color: "white",
      border: "2px solid",
      borderColor: "gray.700",
      transition: "all 0.3s",
      p: "2rem",
      _hover: {
        cursor: "pointer",
      },
    },
    grayOutline: {
      h: "4rem",
      bg: "transparent",
      borderRadius: "0px",
      fontFamily: "Inter",
      fontSize: "1rem",
      lineHeight: "20px",
      color: "gray.700",
      border: "2px solid",
      borderColor: "gray.300",
      transition: "all 0.3s",
      _hover: {
        borderColor: "gray.400",
        cursor: "pointer",
      },
    },
  },
};

export default Button;
