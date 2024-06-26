import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContext, ThemeProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

