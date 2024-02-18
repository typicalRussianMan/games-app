import * as yup from 'yup';

import { Login } from '../../../../models/login';

/** Login form data. */
export type LoginFormData = Login;

/** Schema. */
export const loginSchema = yup.object({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .trim()
    .required()
    .min(8),
});
