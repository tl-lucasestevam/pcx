import { FC } from 'react';
import { Text, Button, Stack, Box } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { loginFormSchema } from '~/utils';
import LoginCredentials from '~/interfaces/LoginCredentials';
import { Input, InputIcon } from '~/components';

const SignInForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginCredentials>({
    resolver: yupResolver(loginFormSchema),
  });

  const handleLogin: SubmitHandler<LoginCredentials> = async ({
    email,
    password,
  }) => {
    console.log(email, password);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing={6}>
        <Input
          iconLeft={<InputIcon icon={<AiOutlineMail />} />}
          placeholder="E-mail"
          type="email"
          error={errors.email}
          {...register('email')}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineLock />} />}
          placeholder="Password"
          type="password"
          error={errors.password}
          {...register('password')}
        />
      </Stack>
      <Box my={6}>
        <Link passHref href="/recovery">
          <Text
            as="a"
            _hover={{ cursor: 'pointer', color: 'red.500' }}
            transition="0.3s all"
          >
            Forgot your password?
          </Text>
        </Link>
      </Box>
      <Button w="full" type="submit" mb="4">
        Login
      </Button>
    </form>
  );
};

export default SignInForm;
