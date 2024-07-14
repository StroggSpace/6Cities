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
import { getFavoritesHotels } from '../../utils/helpers';
import { useHotelsList } from '../../api/apiHooks/useHotelsList';

function App(): JSX.Element {
  const { hotels, isLoading, error } = useHotelsList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error.status === 404) {
    window.location.href = '/not-found';
  } else if (error.status) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage hotelsList={hotels} />} path="/" />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<ErrorPage />} path="/not-found" />
        <Route element={<GoAwayPage />} path="/go-away" />
        <Route element={<LoginPage />} path="/login" />
        <Route
          element={
            <PrivateRoute>
              <FavoritesPage favoritesHotels={getFavoritesHotels(hotels)} />
            </PrivateRoute>
          }
          path="/favorites"
        />
        <Route element={<PropertyPage />} path="/offer/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
