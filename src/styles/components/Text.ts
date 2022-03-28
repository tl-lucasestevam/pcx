import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '16px',
    lineHeight: '25px',
    color: 'gray.700',
  },
  variants: {
    header: {
      fontSize: '20px',
      fontWeight: '600',
    },
    modal: {
      fontSize: '18px',
      lineHeight: '28px',
      color: 'gray.400',
    },
  },
};

export default Text;
