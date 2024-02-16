import * as yup from 'yup';
import { Login } from '../../../models/login';

export type LoginFormData = Login;

export const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().trim().required().min(8),
})
