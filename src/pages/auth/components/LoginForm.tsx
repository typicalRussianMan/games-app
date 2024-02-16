import { FC, memo, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, LinearProgress, Snackbar, TextField, Typography } from "@mui/material";
import { LoginFormData, loginSchema } from "./LoginForm.schema";

import './LoginForm.css';
import { yupResolver } from "@hookform/resolvers/yup";
import { authApi } from "../../../api";
import { isValidationError } from "../../../models/validation-error";
import { Login } from "../../../models/login";
import { AppError } from "../../../models/app-error";
import { tokenService } from "../../../services/token.service";

const LoginFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearError = useCallback(() => {
    setFormError(null);
  }, [setFormError])

  const onSubmit: SubmitHandler<LoginFormData> = async(data) => {
    setIsLoading(true);
    try {
      const response = await authApi.login(data);
      tokenService.setToken(response);

      const user = await authApi.getCurrentUser();

      if (user === null) {
        return;
      }

      console.log(user);
    } catch (err) {
      if (isValidationError<Login>(err)) {
        setError('email', { message: err.details.email });
        setError('password', { message: err.details.password });
      } else {
        setFormError((err as AppError).message)
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" component="h1">Authorization</Typography>
      <TextField
        label="Email"
        placeholder="john.doe@example.com"
        variant="outlined"
        error={errors.email !== undefined}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <TextField
        label="Password"
        placeholder="********"
        variant="outlined"
        error={errors.password !== undefined}
        helperText={errors.password?.message}
        {...register('password')}
      />
      <Button
        disabled={isLoading}
        variant="contained"
        type="submit">
        <Typography variant="body1" component="span">Login</Typography>
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
    </form>
  )
};

export const LoginForm = memo(LoginFormComponent);
