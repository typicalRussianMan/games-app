import { FC, memo, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import { InternalAxiosRequestConfig } from 'axios';

import { authApi, http } from '../../api';
import { Achievement } from '../../models/achievement';

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

  const message = updates[0] ? `${updates[0].title}: ${updates[0].description}` : '';

  return (
    <>
      <Outlet />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
};

/** Achievement provider. */
export const AchievementProvider = memo(AchievementProviderComponent);
