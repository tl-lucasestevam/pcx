import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

import colors from "./foundations/colors";
import fonts from "./foundations/fonts";

const theme = extendTheme({
  styles,
  components: {},
  colors,
  fonts,
});

export default theme;
