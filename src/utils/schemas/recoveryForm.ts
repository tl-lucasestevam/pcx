import * as yup from 'yup';

const recoveryFormSchema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email must be a valid email'),
});

export default recoveryFormSchema;
