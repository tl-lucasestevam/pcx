import Image from "next/image";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link passHref href="/products">
      <Flex
        bg="red.500"
        h="5rem"
        w="5rem"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
      >
        <Image width={30} height={20} src="/assets/logo.svg" alt="Logo" />
      </Flex>
    </Link>
  );
};

export default Logo;
