import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

const MainPageComponent: FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

/** Main page. */
export const MainPage = memo(MainPageComponent);
