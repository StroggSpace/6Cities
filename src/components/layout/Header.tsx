import { Link } from 'react-router-dom';
import { getStateAuthStatus, getUser } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import { AppDispatch } from '../../store';
import { FavoritesIndicator } from '../FavoritesIndicator';

export const Header = () => {
  const authStatus = useSelector(getStateAuthStatus);
  const { user } = useSelector(getUser);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            {authStatus && user ? (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {user.email}
                    </span>
                  </Link>
                </li>
                <FavoritesIndicator />
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to="/"
                    onClick={() => handleLogout()}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/login"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
