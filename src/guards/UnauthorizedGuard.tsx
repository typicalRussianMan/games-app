import { FC, useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { authApi } from "../api";
import { AppError } from "../models/app-error";
import { CircularProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

import './style.css';

export const UnauthorizedGuard: FC = () => {
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

  if (user !== null) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
