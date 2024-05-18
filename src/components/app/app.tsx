import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  FavoritesPage,
  LoginPage,
  ErrorPage,
  PropertyPage,
  GoAwayPage,
} from '../../pages/index';
import { PrivateRoute } from '../../components/PrivateRoute';
import { hotels } from '../../mocks/offers';
import { getFavoritesHotels } from '../../utils/helpers';

interface Props {
  hotelsList: typeof hotels;
}

function App({ hotelsList }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainPage hotelsList={hotelsList} />}
          path='/'
        />
        <Route
          element={<ErrorPage />}
          path='*'
        />
        <Route
          element={<GoAwayPage />}
          path='/go-away'
        />
        <Route
          element={<LoginPage />}
          path='/login'
        />
        <Route
          element={
            <PrivateRoute authStatus>
              <FavoritesPage favoritesHotels={getFavoritesHotels(hotelsList)} />
            </PrivateRoute>
          }
          path='/favorites'
        />
        <Route
          element={<PropertyPage />}
          path='/offer/:id'
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
