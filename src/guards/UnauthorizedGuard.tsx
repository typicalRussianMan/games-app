import { FC, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { useUser } from '../hooks/useUser';
import { authApi } from '../api';
import { AppError } from '../models/app-error';

import './style.css';

/** Unauthorized guard. */
export const UnauthorizedGuard: FC = () => {
  const {
    dispatch,
    state: {
      error,
      isLoading,
      user,
    },
  } = useUser();

  const isFirstLoading = error === null && isLoading === false && user === null;

  useEffect(() => {
    if (isFirstLoading) {
      dispatch({ type: 'loading' });
      authApi.getCurrentUser()
        .then(newUser => {
          if (newUser !== null) {
            dispatch({ type: 'user', user: newUser });
          }
        })
        .catch((err: AppError) => {
          dispatch({ type: 'error', error: err.message });
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
};
