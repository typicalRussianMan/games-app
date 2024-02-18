import * as yup from 'yup';

import { Registration } from '../../../../models/registration';

/** Registration form data. */
export type RegistrationFormData = Registration & {

  /** Password. */
  readonly repeatPassword: string;
};

/** Registration schema. */
export const registrationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8),
  repeatPassword: yup.string().required(),
});
