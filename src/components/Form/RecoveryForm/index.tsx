import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input";
import InputIcon from "../InputIcon";

interface RecoveryFormData {
  email: string;
}

const RecoveryFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email"),
});

const RecoveryForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RecoveryFormData>({
    resolver: yupResolver(RecoveryFormSchema),
  });

  console.log(errors);

  const handleLogin: SubmitHandler<RecoveryFormData> = async ({ email }) => {
    console.log(email);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleLogin)}>
      <Input
        iconLeft={<InputIcon icon={<AiOutlineMail />} />}
        placeholder="E-mail"
        type="email"
        error={errors.email}
        {...register("email")}
      />
      <Button w="full" mt={6} type="submit" mb="4">
        Send recovery email
      </Button>
    </form>
  );
};

export default RecoveryForm;
