import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { HeaderLoginButton, HeaderLogo } from '~/components';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Flex pos="fixed" w="full" zIndex="999">
      <HeaderLogo />
      <Box h="5rem" bg="white" w="calc(100vw - 5rem)">
        <Container maxW="1120px" h="full">
          <Flex
            h="5rem"
            justifyContent={{ base: 'flex-end', sm: 'space-between' }}
            alignItems="center"
          >
            <Text variant="header" display={{ base: 'none', sm: 'block' }}>
              {title}
            </Text>
            <HeaderLoginButton />
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default Header;
