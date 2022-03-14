import {
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputLeftElement,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError;
  icon?: ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        {!!icon && (
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
        )}
        <ChakraInput
          paddingInlineStart="5.25rem"
          borderColor={!!error ? "red.500" : "inherit"}
          name={name}
          id={name}
          ref={ref}
          {...rest}
        />
      </InputGroup>
      {!!error && (
        <FormErrorMessage justifyContent="center" mt="2">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
