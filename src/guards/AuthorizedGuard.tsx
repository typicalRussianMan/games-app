import { FC, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import { authApi } from "../api";
import { CircularProgress } from "@mui/material";
import { AppError } from "../models/app-error";

import './style.css';

export const AuthorizedGuard: FC = () => {
  const {
    dispatch,
    state: {
      error,
      isLoading,
      user,
    },
  } = useUser();

  const isFirstLoading = error === null && isLoading === false && user === null

  useEffect(() => {
    if (isFirstLoading) {
      dispatch({ type: 'loading' })
      authApi.getCurrentUser()
        .then(user => {
          if (user !== null) {
            dispatch({ type: 'user', user });
          }
        })
        .catch((err: AppError) => {
          dispatch({ type: 'error', error: err.message })
        });
    }
  }, []);

  if (isFirstLoading) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="loader">
        <CircularProgress size={100} />
      </div>
    );
  }

  if (error !== null) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
