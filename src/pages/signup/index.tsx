import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { Flex, Grid, GridItem, Text, Heading } from '@chakra-ui/react';
import { SignUpForm } from '~/components';
import Head from 'next/head';
import { parseCookies } from 'nookies';

const SignUp: NextPage = () => {
  return (
    <Flex
      py="5rem"
      minH="calc(100vh - 5rem)"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>PcX | Sign Up</title>
      </Head>
      <Grid templateColumns={{ base: '1fr', lg: '4fr 6fr' }} gap="5rem">
        <GridItem d="flex" justifyContent="center" flexDirection="column">
          <Heading mb="6">We are almost there.</Heading>
          <Text mb="10">
            Log in to start an amazing hardware purchase experience.
          </Text>
          <SignUpForm />
        </GridItem>
        <GridItem d={{ base: 'none', lg: 'flex' }} justifyContent="center">
          <Image
            width="625px"
            height="610px"
            src="/assets/motherboard.svg"
            alt="A red gaming motherboard with rainbow LEDs"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'pcx.token': token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/settings',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default SignUp;
