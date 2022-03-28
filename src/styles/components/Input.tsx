import { ComponentStyleConfig } from '@chakra-ui/react';

const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: 'default',
  },
  variants: {
    default: {
      field: {
        height: '4rem',
        color: 'gray.700',
        bg: 'white',
        borderRadius: '0px',
        border: '1px solid',
        borderColor: 'gray.200',
        _focus: {
          borderColor: 'red.500',
        },
      },
    },
  },
};

export default Input;
