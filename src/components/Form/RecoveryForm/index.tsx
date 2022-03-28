import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputIcon } from '~/components';
import { RecoveryCredentials } from '~/interfaces';
import { recoveryFormSchema } from '~/utils';

const RecoveryForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RecoveryCredentials>({
    resolver: yupResolver(recoveryFormSchema),
  });

  const handleRecovery: SubmitHandler<RecoveryCredentials> = async ({
    email,
  }) => {
    console.log(email);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleRecovery)}>
      <Input
        iconLeft={<InputIcon icon={<AiOutlineMail />} />}
        placeholder="E-mail"
        type="email"
        error={errors.email}
        {...register('email')}
      />
      <Button w="full" mt={6} type="submit" mb="4">
        Send recovery email
      </Button>
    </form>
  );
};

export default RecoveryForm;
