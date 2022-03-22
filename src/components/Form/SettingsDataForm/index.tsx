import { Button, Stack } from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import Input from "../Input";
import * as yup from "yup";
import { AuthContext } from "../../../contexts";
import InputIcon from "../InputIcon";
import { AiOutlineIdcard, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface SettingsDataFormCredentials {
  name: string;
  cpf: string;
  email: string;
}

const SettingsDataFormSchema = yup.object({
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

const SettingsDataForm: FC = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SettingsDataFormCredentials>({
    resolver: yupResolver(SettingsDataFormSchema),
  });

  const handleSettingsData: SubmitHandler<SettingsDataFormCredentials> = async (
    formData
  ) => {};

  return (
    <form noValidate onSubmit={handleSubmit(handleSettingsData)}>
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
          disabled
          {...register("email")}
        />
        <Input
          iconLeft={<InputIcon icon={<AiOutlineIdcard />} />}
          placeholder="Cpf"
          mask="999.999.999-99"
          error={errors.cpf}
          {...register("cpf")}
        />
      </Stack>
      <Button isLoading={loading} w="full" mt={6} type="submit" mb="4">
        Create account
      </Button>
    </form>
  );
};

export default SettingsDataForm;
