import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header/Header';
import { getCity, getStateAuthStatus } from '../../store/selectors';
import { Link } from 'react-router-dom';
import { login } from '../../store/action';
import { AppDispatch } from '../../store';
import { useEffect, useState } from 'react';

export const LoginPage = () => {
  const activeCity = useSelector(getCity);
  const authStatus = useSelector(getStateAuthStatus);
  const dispatch: AppDispatch = useDispatch();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(formData));
  };

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
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
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
