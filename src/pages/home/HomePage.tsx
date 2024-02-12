import { FC, memo } from 'react';

const HomePageComponent: FC = () => (
  <div>
    Home page!
  </div>
);

export const HomePage = memo(HomePageComponent);
