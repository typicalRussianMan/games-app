import { FC, memo, useCallback, useEffect, useState } from "react";
import { RegistrationFormData, registrationSchema } from "./RegistrationForm.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../../../hooks/useUser";
import { Button, LinearProgress, Snackbar, TextField, Typography } from "@mui/material";

import '../style.css';
import { authApi } from "../../../../api";
import { tokenService } from "../../../../services/token.service";
import { Registration } from "../../../../models/registration";
import { isValidationError } from "../../../../models/validation-error";
import { AppError } from "../../../../models/app-error";
import { Link } from "react-router-dom";

const RegistrationFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registrationSchema),
  });
  const formValues = watch();

  useEffect(() => {
    if (formValues.password !== formValues.repeatPassword) {
      setError('repeatPassword', { message: 'Passwords doesn\'t match' })
    } else {
      clearErrors('repeatPassword');
    }
  }, [formValues.repeatPassword, formValues.password]);

  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUser();

  const clearError = useCallback(() => {
    setFormError(null);
  }, [setFormError]);

  const omSubmit: SubmitHandler<RegistrationFormData> = async(data) => {
    clearErrors('root');
    try {
      const response = await authApi.register(data);
      tokenService.setToken(response);

      const user = await authApi.getCurrentUser();

      if (user === null) {
        return;
      }

      dispatch({ type: 'user', user });
    } catch (err) {
      if (isValidationError<Registration>(err)) {
        for (const key in err.details) {
          setError(
            key as keyof Registration,
            { message: err.details[key as keyof Registration] }
          );
        }
      } else {
        setFormError((err as AppError).message)
      }
    } finally {
      setIsLoading(false);
    }
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
      <Button
        disabled={isLoading}
        variant="contained"
        type="submit">
        <Typography variant="body1" component="span">Register</Typography>
      </Button>
      {isLoading &&
        <LinearProgress />
      }
      <Snackbar
        open={formError !== null}
        message={formError}
        onClose={clearError}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <Link to="../login">
        <Typography variant="body1" component='span'>Already have an account?</Typography>
      </Link>
    </form>
  )
}

export const RegistrationForm = memo(RegistrationFormComponent);
