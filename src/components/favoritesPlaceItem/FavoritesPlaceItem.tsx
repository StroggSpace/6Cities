import { Link } from 'react-router-dom';
import { Hotels } from '../../types/hotels';
import { FavoriteHotelCard } from '../hotelCard/FavoriteHotelCard';
import { useDispatch } from 'react-redux';
import { setCity } from '../../store/hotelsSlice';

interface Props {
  favoritesItems: Hotels;
  city: string;
}

export const FavoritesPlaceItem = ({ favoritesItems, city }: Props) => {
  const dispatch = useDispatch();
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={() => dispatch(setCity(city))}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesItems.map((favoritesItem) => (
          <FavoriteHotelCard key={favoritesItem.id} hotel={favoritesItem} />
        ))}
      </div>
    </li>
  );
};
