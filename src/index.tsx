import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { hotels } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App hotelsList={hotels} />
  </Provider>
);
