import { useCallback, useEffect, useState } from 'react';
import { changeFavoriteStatus } from '../api/api';
import { BOOLEAN } from '../utils/consts';
import { useDispatch } from 'react-redux';
import { addFavoriteItem, removeFavoriteItem } from '../store/hotelsSlice';
import { Hotel } from '../types/hotels';
import { useSelector } from 'react-redux';
import { getFavoritesHotels } from '../store/selectors';

export const CardFavoriteButton = ({ hotel }: { hotel: Hotel }) => {
  const FavoritesList = useSelector(getFavoritesHotels);

  const searchFavorite = useCallback(
    (id: number) => FavoritesList.some((item) => item.id === id),
    [FavoritesList]
  );

  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchFavorite(hotel.id)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [hotel, FavoritesList, searchFavorite]);

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
      className={`place-card__bookmark-button ${
        status ? 'place-card__bookmark-button--active' : ''
      } button`}
      type="button"
      onClick={handleClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
