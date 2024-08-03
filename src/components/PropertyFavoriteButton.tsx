import { useState } from 'react';
import { changeFavoriteStatus } from '../api/api';
import { BOOLEAN } from '../utils/consts';
import { Hotel } from '../types/hotels';
import { addFavoriteItem, removeFavoriteItem } from '../store/hotelsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesHotels } from '../store/selectors';

export const PropertyFavoriteButton = ({ hotel }: { hotel: Hotel }) => {
  const FavoritesList = useSelector(getFavoritesHotels);

  const searchFavorite = (id: number) =>
    FavoritesList.some((item) => item.id === id);

  const [status, setStatus] = useState(searchFavorite(hotel.id));
  const dispatch = useDispatch();

  const handleClick = () => {
    changeFavoriteStatus(hotel.id, BOOLEAN.get(!status) as number);

    if (BOOLEAN.get(!status) === 1) {
      dispatch(addFavoriteItem(hotel));
      setStatus(true);
    } else {
      dispatch(removeFavoriteItem(hotel.id));
      setStatus(false);
    }
  };

  return (
    <button
      className={`property__bookmark-button ${
        status ? 'property__bookmark-button--active' : ''
      } button`}
      type="button"
      onClick={handleClick}
    >
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
