import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  authStatus: boolean;
  children: JSX.Element;
}

export const PrivateRoute: FC<Props> = ({
  authStatus,
  children,
}): JSX.Element => (authStatus ? children : <Navigate to="/go-away" />);
