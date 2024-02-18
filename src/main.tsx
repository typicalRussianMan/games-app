import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element is null');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
