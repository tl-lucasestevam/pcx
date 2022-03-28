import * as yup from 'yup';

const loginFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email must be a valid email'),
  password: yup.string().required('Password is a required field'),
});

export default loginFormSchema;
