import { Hotel } from '../../types/hotels';
import { HotelCard } from '../hotelCard/HotelCard';

interface Props {
  favoritesItem: Hotel;
}

export const FavoritesPlaceItem = ({ favoritesItem }: Props) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{favoritesItem.city.name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      <HotelCard hotel={favoritesItem} />
    </div>
  </li>
);
