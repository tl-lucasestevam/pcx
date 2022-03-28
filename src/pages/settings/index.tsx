import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Head from 'next/head';
import { FC } from 'react';
import { SettingsDataForm } from '~/components';

const Settings: FC = () => {
  return (
    <Flex
      py="5rem"
      minH="calc(100vh - 5rem)"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>PcX | Settings</title>
      </Head>
      <Grid templateColumns={{ base: '1fr', lg: '4fr 6fr' }} gap="5rem">
        <GridItem d="flex" justifyContent="center" flexDirection="column">
          <SettingsDataForm />
        </GridItem>
        <GridItem
          d={{ base: 'none', lg: 'flex' }}
          justifyContent="center"
        ></GridItem>
      </Grid>
    </Flex>
  );
};

export default Settings;
