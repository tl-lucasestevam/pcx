import { FC } from "react";
import { HStack, Avatar, Text } from "@chakra-ui/react";

const LoginButton: FC = () => {
  const firstName = "";
  const avatarUrl = "";

  return (
    <HStack spacing="4" _hover={{ cursor: "pointer" }}>
      <Text fontWeight="600">{firstName ? firstName : "Login"}</Text>
      <Avatar color="gray.600" bg="gray.200" name={firstName} src={avatarUrl} />
    </HStack>
  );
};

export default LoginButton;
