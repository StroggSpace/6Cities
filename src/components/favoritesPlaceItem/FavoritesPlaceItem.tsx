import { hotels } from '../../mocks/offers';
import { HotelCard } from '../hotelCard/HotelCard';

interface Props {
  favoritesItem: (typeof hotels)[number];
}

export const FavoritesPlaceItem = ({ favoritesItem }: Props) => (
  <li className='favorites__locations-items'>
    <div className='favorites__locations locations locations--current'>
      <div className='locations__item'>
        <a
          className='locations__item-link'
          href='#'
        >
          <span>{favoritesItem.city.name}</span>
        </a>
      </div>
    </div>
    <div className='favorites__places'>
      <HotelCard hotel={favoritesItem} />
    </div>
  </li>
);
