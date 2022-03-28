import { extendTheme } from '@chakra-ui/react';
import styles from './styles';

import colors from './foundations/colors';
import fonts from './foundations/fonts';

import Text from './components/Text';
import Input from './components/Input';
import Button from './components/Button';
import Heading from './components/Heading';

const theme = extendTheme({
  styles,
  components: {
    Text,
    Heading,
    Input,
    Button,
  },
  colors,
  fonts,
});

export default theme;
