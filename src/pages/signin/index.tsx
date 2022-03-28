import type { NextPage } from 'next';
import {
  Flex,
  Image,
  Grid,
  GridItem,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { SignInForm } from '~/components';
import Link from 'next/link';

const SignIn: NextPage = () => {
  return (
    <Flex
      py="5rem"
      minH="calc(100vh - 5rem)"
      justifyContent="center"
      alignItems="center"
    >
      <Grid templateColumns={{ base: '1fr', md: '6fr 4fr' }} gap="5rem">
        <GridItem d={{ base: 'none', md: 'flex' }} justifyContent="center">
          <Image src="/assets/gpu.svg" alt="gpu image" />
        </GridItem>
        <GridItem d="flex" justifyContent="center" flexDirection="column">
          <Heading mb="6">We are almost there.</Heading>
          <Text mb="10">
            Log in to start an amazing hardware purchase experience.
          </Text>
          <SignInForm />
          <Link href="/signin" passHref>
            <Button variant="grayOutline">Create account</Button>
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default SignIn;
