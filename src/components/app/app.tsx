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

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<ErrorPage />} path="*" />
        <Route element={<GoAwayPage />} path="/go-away" />
        <Route element={<LoginPage />} path="/login" />
        <Route
          element={
            <PrivateRoute authStatus={false}>
              <FavoritesPage />
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
