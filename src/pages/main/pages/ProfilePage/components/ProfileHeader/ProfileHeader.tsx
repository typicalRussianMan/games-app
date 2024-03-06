import { FC, memo } from 'react';
import { Avatar, Typography } from '@mui/material';

import { User } from '../../../../../../models/user';

import './style.css';

type Props = {

  /** User. */
  readonly user: User;
};

const ProfileHeaderComponent: FC<Props> = ({ user }) => (
  <div className='profile-header'>
    <Avatar
      className='avatar'
      alt={user.firstName}
      src={user.avatar}
      sx={{ width: 160, height: 160 }}
    />
    <Typography
      variant='h4'
      component='div'
    >
      {user.firstName} {user.lastName}
    </Typography>
    <Typography
      variant='body1'
      component='div'
      className='email'
    >
      {user.email}
    </Typography>
  </div>
);

/** Profile header. */
export const ProfileHeader = memo(ProfileHeaderComponent);
