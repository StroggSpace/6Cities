import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  FavoritesPage,
  LoginPage,
  PropertyPage,
  GoAwayPage,
  NotFoundPage,
} from '../../pages/index';
import { PrivateRoute } from '../../components/PrivateRoute';
import { Layout } from '../layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getStateAuthStatus } from '../../store/selectors';
import { useEffect } from 'react';
import { cleanState, getOffers } from '../../store/hotelsSlice';
import { AppDispatch } from '../../store';

function App(): JSX.Element {
  const authStatus = useSelector(getStateAuthStatus);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
    if (!authStatus) {
      dispatch(cleanState());
    }
  }, [authStatus, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<MainPage />} index />
          <Route
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
            path="/favorites"
          />
          <Route element={<PropertyPage />} path="/offer/:id" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<NotFoundPage />} path="*" />
        <Route element={<NotFoundPage />} path="/not-found" />
        <Route element={<GoAwayPage />} path="/go-away" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
