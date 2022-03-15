import { FC } from "react";
import { Text, Button, Stack, Box } from "@chakra-ui/react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import Input from "../Input";

interface LoginFormData {
  email: string;
  password: string;
}

const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email"),
  password: yup.string().required("Password is a required field"),
});

const LoginForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  console.log(errors);

  const handleLogin: SubmitHandler<LoginFormData> = async ({
    email,
    password,
  }) => {
    console.log(email, password);
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing={6}>
        <Input
          icon={
            <AiOutlineMail
              size="1.5rem"
              color="var(--chakra-colors-gray-600)"
            />
          }
          placeholder="E-mail"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          icon={
            <AiOutlineLock
              size="1.5rem"
              color="var(--chakra-colors-gray-600)"
            />
          }
          placeholder="Password"
          type="password"
          error={errors.password}
          {...register("password")}
        />
      </Stack>
      <Box my={6}>
        <Link passHref href="/recovery">
          <Text
            as="a"
            _hover={{ cursor: "pointer", color: "red.500" }}
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

export default LoginForm;
