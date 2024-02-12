import { FC, memo } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const AppComponent: FC = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button>
          <Link to={'/home'}>Home page</Link>
        </button>
        <button>
          <Link to={'/test'}>Test page</Link>
        </button>
      </div>
      <div className="card">
        <Outlet />
      </div>
    </>
  )
}

export const App = memo(AppComponent);
