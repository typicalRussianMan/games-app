import { FC, useCallback, useEffect, useState } from "react";
import { RegistrationFormData, registrationSchema } from "./RegistrationForm.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../../../hooks/useUser";
import { TextField, Typography } from "@mui/material";

import '../style.css';

const RegistrationFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    watch
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
  });
  const formValues = watch();

  useEffect(() => {
    if (formValues.password !== formValues.repeatPassword) {
      setError('repeatPassword', { message: 'Passwords doesn\'t match' })
    }
  }, [formValues.repeatPassword]);

  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUser();

  const clearError = useCallback(() => {
    setFormError(null);
  }, [setFormError]);

  const omSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit(omSubmit)}>
      <Typography variant="h4" component="h1">Create account</Typography>
      <TextField
        label="Email"
        placeholder="john.doe@example.com"
        variant="outlined"
        error={errors.email !== undefined}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <TextField
        label="First name"
        placeholder="John"
        variant="outlined"
        error={errors.firstName !== undefined}
        helperText={errors.firstName?.message}
        {...register('firstName')}
      />
      <TextField
        label="Last name"
        placeholder="Doe"
        variant="outlined"
        error={errors.lastName !== undefined}
        helperText={errors.lastName?.message}
        {...register('lastName')}
      />
      <TextField
        label="Password"
        placeholder="********"
        variant="outlined"
        error={errors.password !== undefined}
        helperText={errors.password?.message}
        {...register('password')}
      />
      <TextField
        label="Repeat password"
        placeholder="********"
        variant="outlined"
        error={errors.repeatPassword !== undefined}
        helperText={errors.repeatPassword?.message}
        {...register('repeatPassword')}
      />
    </form>
  )
}
