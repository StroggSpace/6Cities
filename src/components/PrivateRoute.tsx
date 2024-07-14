import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateAuthStatus } from '../store/selectors';

interface Props {
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({ children }): JSX.Element => {
  const authStatus = useSelector(getStateAuthStatus);

  return authStatus ? children : <Navigate to="/go-away" />;
};
