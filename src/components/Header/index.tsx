import {
  Box,
  Container,
  Flex,
  Text,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import LoginButton from "./LoginButton";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [isLargerThan320] = useMediaQuery("(min-width: 320px)");

  return (
    <Flex pos="fixed" w="full">
      <Logo />
      <Box h="5rem" bg="white" w="full">
        <Container maxW="1120px" h="full">
          <Flex
            h="5rem"
            justifyContent={isLargerThan320 ? "space-between" : "flex-end"}
            alignItems="center"
          >
            {isLargerThan320 && <Text variant="header">{title}</Text>}
            <LoginButton />
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default Header;
