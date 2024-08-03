import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavoritesHotels } from '../store/selectors';

export const FavoritesIndicator = () => {
  const favoritesHotels = useSelector(getFavoritesHotels);

  if (!favoritesHotels.length) {
    return null;
  }

  return (
    <li className="header__nav-item">
      <Link
        to="/favorites"
        style={{
          textDecoration: 'none',
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="header__favorite-count">{favoritesHotels.length}</span>
      </Link>
    </li>
  );
};
