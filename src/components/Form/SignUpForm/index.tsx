import { FC, useState } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineLock,
} from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '~/hooks';
import { SignUpCredentials } from '~/interfaces';
import { signUpFormSchema } from '~/utils';
import { Input, InputIcon } from '~/components';

const SignUpForm: FC = () => {
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpCredentials>({
    resolver: yupResolver(signUpFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpCredentials> = async (formData) => {
    setLoading(true);
    await signUp(formData);
    setLoading(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSignUp)}>
      <Stack spacing={6}>
        <Input
          iconLeft={<InputIcon icon={<AiOutlineUser />} />}
          placeholder="Name"
          error={errors.name}
          {...register('name')}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineMail />} />}
          placeholder="E-mail"
          type="email"
          error={errors.email}
          {...register('email')}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineIdcard />} />}
          placeholder="Cpf"
          mask="999.999.999-99"
          error={errors.cpf}
          {...register('cpf')}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineLock />} />}
          placeholder="Password"
          error={errors.password}
          {...register('password')}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineLock />} />}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
          {...register('confirmPassword')}
        />
      </Stack>
      <Button isLoading={loading} w="full" mt={6} type="submit" mb="4">
        Create account
      </Button>
    </form>
  );
};

export default SignUpForm;
