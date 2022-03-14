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

      <Box
        ml="auto"
        pb={{ base: "5rem", md: "0" }}
        pt="5rem"
        w={{ base: "100vw", md: "calc(100vw - 5rem)" }}
      >
        <Container maxW="1120px" h="full" minH="calc(100vh - 5rem)">
          {children}
        </Container>
      </Box>
    </>
  );
};

export default AppTemplate;
