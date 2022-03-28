import { FC } from 'react';
import { HStack, Avatar, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAuth } from '~/hooks';

const HeaderLoginButton: FC = () => {
  const { user } = useAuth();
  return (
    <Link href="/settings" passHref>
      <HStack spacing="4" _hover={{ cursor: 'pointer' }}>
        <Text fontWeight="600">
          {user.name ? user.name?.split(' ')[0] : 'Login'}
        </Text>
        <Avatar
          color="gray.600"
          bg="gray.200"
          name={user.name}
          src={user.avatar}
        />
      </HStack>
    </Link>
  );
};

export default HeaderLoginButton;
