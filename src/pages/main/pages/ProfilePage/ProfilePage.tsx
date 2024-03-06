import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { Profile } from '../../../../models/profile';
import { authApi } from '../../../../api';
import { PageLoading } from '../../../../components/PageLoading';
import { useUser } from '../../../../hooks/useUser';

import { ProfileHeader } from './components/ProfileHeader';
import { Achievements } from './components/Achievements/Achievements';

/** Profile page. */
export const ProfilePage: FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const { dispatch } = useUser();

  useEffect(() => {
    authApi.getProfile().then(newProfile => setProfile(newProfile));
  }, []);

  if (profile === null) {
    return <PageLoading />;
  }

  const handleLogout = (): void => {
    dispatch({ type: 'logout' });
    window.location.reload();
  };

  return (
    <>
      <ProfileHeader user={profile} />
      <Button color='warning' onClick={handleLogout}>Logout</Button>
      <Achievements achievements={profile.achievements} />
    </>
  );
};
