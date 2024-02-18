import { FC, memo } from 'react';

const MainPageComponent: FC = () => (
  <div>This page can see only authorized users</div>
);

/** Main page. */
export const MainPage = memo(MainPageComponent);
