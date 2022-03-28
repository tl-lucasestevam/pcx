import { TypeOf } from "yup";
import { recoveryFormSchema } from "../utils";

interface RecoveryCredentials extends TypeOf<typeof recoveryFormSchema> {}

export default RecoveryCredentials;
