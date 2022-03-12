import { FC, ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import { Sidebar, Header } from "..";

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate: FC<AppTemplateProps> = ({ children }) => {
  return (
    <>
      <Header title="Login" />
      <Sidebar />

      <Box ml="auto" pt="5rem" w="calc(100vw - 5rem)" h="100vh">
        <Container
          maxW="1120px"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          h="full"
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default AppTemplate;
