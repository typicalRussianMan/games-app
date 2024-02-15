import { FC, memo } from "react";

const MainPageComponent: FC = () => {
  return (
    <div>This page can see only authorized users</div>
  );
}

export const MainPage = memo(MainPageComponent);
