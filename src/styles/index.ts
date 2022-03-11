import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

import colors from "./foundations/colors";
import fonts from "./foundations/fonts";

import Text from "./components/text";

const theme = extendTheme({
  styles,
  components: {
    Text,
  },
  colors,
  fonts,
});

export default theme;
