import { Link } from 'react-router-dom';

export const ErrorPage = () => (
  <div style={{ display: 'grid', placeItems: 'center' }}>
    <h1 style={{ fontSize: '50px' }}>Произошла ошибка!</h1>
    <p style={{ fontSize: '32px', fontWeight: '500' }}>
      Пожалуйста, обновите страницу
    </p>
    <Link
      to="/"
      style={{
        border: '2px solid black',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      Go back
    </Link>
  </div>
);
