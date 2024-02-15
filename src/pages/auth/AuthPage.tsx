import { Typography } from "@mui/material";
import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

import './AuthPage.css';

const AuthPageComponent: FC = () => {
  return (
    <div className="layout">
      <div className='logo'>
        <Typography variant="h3" component="span">App Logo</Typography>
      </div>
      <Outlet />
    </div>
  )
}

export const AuthPage = memo(AuthPageComponent);
