import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import './AuthPage.css';

const AuthPageComponent: FC = () => (
  <div className='layout'>
    <div className='logo'>
      <img className='logo__img' src='/logo_with_text.png' alt='Logo' />
    </div>
    <Outlet />
  </div>
);

/** Auth page. */
export const AuthPage = memo(AuthPageComponent);
