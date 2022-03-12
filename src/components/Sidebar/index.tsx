import { Box, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";
import { NavLinks } from "../../utils";
import Item from "./Item";

const Sidebar: FC = () => {
  return (
    <Box
      pos="fixed"
      mt={{ base: "0", md: "5rem" }}
      bottom={{ base: "0", md: "auto" }}
      minH={{ base: "5rem", md: "calc(100vh - 5rem)" }}
      bg="gray.900"
      w={{ base: "100vw", md: "5rem" }}
    >
      <UnorderedList
        m="0"
        h={{ base: "5rem", md: "calc(100vh - 5rem)" }}
        d="flex"
        flexDirection={{ base: "row", md: "column" }}
        alignItems="center"
        justifyContent="center"
      >
        {NavLinks.map(({ name }) => (
          <Item path={`/${name}`} key={name} />
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
