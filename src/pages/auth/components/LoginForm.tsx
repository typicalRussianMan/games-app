import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { LoginFormData, loginSchema } from "./LoginForm.schema";

import './LoginForm.css';
import { yupResolver } from "@hookform/resolvers/yup";

const LoginFormComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    console.log(data);
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
      <Button variant="contained" type="submit">
        <Typography variant="body1" component="span">Login</Typography>
      </Button>
    </form>
  )
};

export const LoginForm = memo(LoginFormComponent);
