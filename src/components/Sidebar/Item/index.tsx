import { Box, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface SidebarItemProps {
  path: string;
}

const Item: FC<SidebarItemProps> = ({ path }) => {
  const { asPath } = useRouter();
  const isActive = asPath === path;
  return (
    <ListItem
      py={{ base: "0", md: "4" }}
      listStyleType="none"
      h={{ base: "5rem", md: "auto" }}
      w="full"
      d="flex"
      alignItems="center"
      justifyContent="center"
      transition="0.3s all"
      borderLeft="5px solid"
      borderColor={isActive ? "red.500" : "transparent"}
      bg={isActive ? "#000" : "transparent"}
      _hover={{
        cursor: "pointer",
        borderLeft: "solid",
        borderLeftWidth: "5px",
        borderLeftColor: "red.500",
      }}
    >
      <Link passHref href={path}>
        <Box as="a" lineHeight="1px">
          <Image
            src={`/assets/icons${path}.svg`}
            height={24}
            width={24}
            alt={path.replace("/", "")}
          />
        </Box>
      </Link>
    </ListItem>
  );
};

export default Item;
