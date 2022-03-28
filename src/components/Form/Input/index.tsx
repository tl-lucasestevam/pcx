import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps extends ChakraInputProps {
  name: string;
  mask?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    error = null,
    iconLeft = null,
    iconRight = null,
    mask = null,
    ...rest
  },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        {iconLeft && (
          <InputLeftElement pointerEvents="none">{iconLeft}</InputLeftElement>
        )}
        <ChakraInput
          paddingInlineStart="5.25rem"
          borderColor={error ? "red.500" : "inherit"}
          name={name}
          id={name}
          ref={ref}
          as={mask ? InputMask : ChakraInput}
          mask={mask}
          {...rest}
        />
        {iconRight && (
          <InputRightElement pointerEvents="none">
            {iconRight}
          </InputRightElement>
        )}
      </InputGroup>
      {error && (
        <FormErrorMessage justifyContent="center" mt="2">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
