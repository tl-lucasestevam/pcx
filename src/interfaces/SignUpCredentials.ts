import { TypeOf } from "yup";
import { signUpFormSchema } from "../utils";

interface SignUpCredentials extends TypeOf<typeof signUpFormSchema> {}

export default SignUpCredentials;
