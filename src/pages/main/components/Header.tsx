import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC, memo } from 'react';
import AccountIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import './style.css';

const HeaderComponent: FC = () => (
  <AppBar position='static' color='primary'>
    <Toolbar variant='dense'>
      <Link className='link' to={'/profile'}>
        <AccountIcon />
      </Link>
      <Link to={'/'} className='link header'>
        <Typography
          textAlign='center'
          component='h1'
          variant='h5'
          sx={{ flexGrow: 1 }}
          fontFamily='Righteous'>
          RadBonus
        </Typography>
      </Link>
      <MenuIcon />
    </Toolbar>
  </AppBar>
);

/** Header. */
export const Header = memo(HeaderComponent);
