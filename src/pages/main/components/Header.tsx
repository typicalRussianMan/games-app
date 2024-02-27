import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC, memo } from 'react';
import AccountIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderComponent: FC = () => (
  <AppBar position='static' color='primary'>
    <Toolbar variant='dense'>
      <AccountIcon />
      <Typography
        textAlign='center'
        component='h1'
        variant='h5'
        sx={{ flexGrow: 1 }}>
        Games App
      </Typography>
      <MenuIcon />
    </Toolbar>
  </AppBar>
);

/** Header. */
export const Header = memo(HeaderComponent);
