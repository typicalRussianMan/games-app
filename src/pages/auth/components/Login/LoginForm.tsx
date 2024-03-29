import { FC, memo, useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, LinearProgress, Snackbar, TextField, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { authApi } from '../../../../api';
import { AppError } from '../../../../models/app-error';
import { tokenService } from '../../../../services/token.service';
import { useUser } from '../../../../hooks/useUser';
import '../style.css';

import { LoginFormData, loginSchema } from './LoginForm.schema';

const LoginFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useUser();

  const clearError = useCallback(() => {
    setFormError(null);
  }, [setFormError]);

  const onSubmit: SubmitHandler<LoginFormData> = async data => {
    setIsLoading(true);
    try {
      const response = await authApi.login(data);
      tokenService.setToken(response);

      const user = await authApi.getCurrentUser();

      if (user === null) {
        return;
      }

      dispatch({ type: 'user', user });
    } catch (err) {
      setFormError((err as AppError).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
      <Link to="../register">
        <Typography variant="body1" component='span'>Create account</Typography>
      </Link>
    </form>
  );
};

/** Login form. */
export const LoginForm = memo(LoginFormComponent);
