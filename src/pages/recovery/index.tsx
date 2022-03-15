import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { RecoveryForm } from "../../components";

const Favorites: FC = () => {
  return (
    <Flex
      py="5rem"
      minH="calc(100vh - 5rem)"
      justifyContent="center"
      alignItems="center"
    >
      <Grid templateColumns={{ base: "1fr", md: "6fr 4fr" }} gap="5rem">
        <GridItem d={{ base: "none", md: "flex" }} justifyContent="center">
          <Image src="/assets/gpu.svg" alt="gpu image" />
        </GridItem>
        <GridItem d="flex" justifyContent="center" flexDirection="column">
          <Heading mb="6">Recover password.</Heading>
          <Text mb="10">Enter your email to receive a recovery link .</Text>
          <RecoveryForm />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Favorites;
