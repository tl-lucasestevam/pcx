import { TypeOf } from 'yup';
import { loginFormSchema } from '../utils';

interface LoginCredentials extends TypeOf<typeof loginFormSchema> {}

export default LoginCredentials;
