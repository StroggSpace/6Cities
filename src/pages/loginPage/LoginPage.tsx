import { useSelector } from 'react-redux';
import { Header } from '../../components/header/Header';
import { getCity, getStateAuthStatus } from '../../store/selectors';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
  const activeCity = useSelector(getCity);
  const authStatus = useSelector(getStateAuthStatus);

  useEffect(() => {
    if (authStatus) {
      window.location.href = '/';
    }
  }, [authStatus]);

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{activeCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
