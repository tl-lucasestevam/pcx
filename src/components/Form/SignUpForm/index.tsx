import { FC, useContext, useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineIdcard,
  AiOutlineLock,
} from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input";
import InputIcon from "../InputIcon";
import { AuthContext } from "../../../contexts";
import { SignUpFormCredentials } from "../../../interfaces";

const SignUpFormSchema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .min(3, "Enter a name more than 3 character")
    .max(
      120,
      "Enter a name of less than 120 characters, abbreviate if necessary"
    ),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email"),
  cpf: yup
    .string()
    .required("CPF is a required field")
    .matches(/^\d{3}.?\d{3}.?\d{3}-?\d{2}$/, "The CPF must be valid"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(5, "Enter a password more than 5 character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUpForm: FC = () => {
  const { signUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormCredentials>({
    resolver: yupResolver(SignUpFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpFormCredentials> = async (
    formData
  ) => {
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
          {...register("name")}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineMail />} />}
          placeholder="E-mail"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineIdcard />} />}
          placeholder="Cpf"
          mask="999.999.999-99"
          error={errors.cpf}
          {...register("cpf")}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineLock />} />}
          placeholder="Password"
          error={errors.password}
          {...register("password")}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineLock />} />}
          placeholder="Confirm Password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
      </Stack>
      <Button isLoading={loading} w="full" mt={6} type="submit" mb="4">
        Create account
      </Button>
    </form>
  );
};

export default SignUpForm;
