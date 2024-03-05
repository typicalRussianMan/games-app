import { FC, MouseEvent, memo, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IconButton, Snackbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { InternalAxiosRequestConfig } from 'axios';

import { authApi, http } from '../../api';
import { Achievement } from '../../models/achievement';

import './style.css';

type Interceptor = (conf: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
type VFn = () => void;
type Conf = InternalAxiosRequestConfig;

const sendAchievementRequestAfterRequest = (onSend: VFn): Interceptor => (conf: Conf): Conf => {
  if (conf.url && !conf.url.includes('check-achievements')) {
    onSend();
  }
  return conf;
};

const AchievementProviderComponent: FC = () => {
  const [updates, setUpdates] = useState<Achievement[]>([]);
  const [open, setOpen] = useState(false);

  const onRequest = (): void => {
    setTimeout(async() => {
      const achievements = await authApi.checkAchievementUpdates();
      const total = [...updates, ...achievements];
      setUpdates(total);
      setOpen(total.length > 0);
    }, 1000);
  };

  useEffect(() => {
    const id = http.interceptors.request.use(sendAchievementRequestAfterRequest(onRequest));

    return () => http.interceptors.request.eject(id);
  }, []);

  useEffect(() => {
    if (!open && updates.length > 0) {
      setOpen(true);
    }
  }, [open]);

  const handleClose = (): void => {
    setOpen(false);
    setUpdates(updates.slice(1));
  };

  const handleAchievementClick = (_e: MouseEvent): void => {
    window.location.href = '/profile';
  };

  const handleAchievementClose = (e: MouseEvent): void => {
    e.stopPropagation();
    handleClose();
  };

  return (
    <>
      <Outlet />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <div className='snackbar' tabIndex={1} onClick={handleAchievementClick}>
          <div className="image-block">
            <img
              width={75}
              src="https://static.vecteezy.com/system/resources/previews/011/665/596/non_2x/3d-trophy-cup-icon-isolated-in-white-background-3d-rendering-png.png"
            />
          </div>
          <div className="achievement-info">
            <Typography variant='h5' component='div'>{updates[0]?.title}</Typography>
            <Typography variant='body1' component='div'>{updates[0]?.description}</Typography>
          </div>
          <IconButton onClick={handleAchievementClose} color='primary' aria-label='close popup'>
            <CloseIcon />
          </IconButton>
        </div>
      </Snackbar>
    </>
  );
};

/** Achievement provider. */
export const AchievementProvider = memo(AchievementProviderComponent);
