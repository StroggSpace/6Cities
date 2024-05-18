import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { hotels } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App hotelsList={hotels}/>
  </React.StrictMode>
);
