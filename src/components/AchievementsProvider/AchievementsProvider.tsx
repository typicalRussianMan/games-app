import { FC, memo, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Snackbar } from '@mui/material';

import { authApi } from '../../api';
import { Achievement } from '../../models/achievement';

const AchievementProviderComponent: FC = () => {

  const [updates, setUpdates] = useState<Achievement[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const iId = setInterval(async() => {
      const newUpdates = await authApi.checkAchievementUpdates();
      const total = [...updates, ...newUpdates];
      setUpdates(total);
      setOpen(total.length > 0);
    }, 5000);

    return () => clearInterval(iId);
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
