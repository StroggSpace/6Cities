import { Link } from 'react-router-dom';

export const GoAwayPage = () => (
  <div style={{ display: 'grid', placeItems: 'center' }}>
    <h1 style={{ fontSize: '50px' }}>Доступ запрещен!</h1>
    <p style={{ fontSize: '32px', fontWeight: '500' }}>
      Пожалуйста, авторизируйтесь!
    </p>
    <Link
      to="/login"
      style={{
        border: '2px solid black',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      Войти
    </Link>
  </div>
);
