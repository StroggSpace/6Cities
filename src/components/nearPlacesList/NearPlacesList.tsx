import { FC } from 'react';
import { Hotel, Hotels } from '../../types/hotels';
import { HotelCard } from '../hotelCard/HotelCard';

interface Props {
  places: Hotels;
  setSelectedPoint: (hotel: Hotel | undefined) => void;
}

export const NearPlacesList: FC<Props> = ({ places, setSelectedPoint }) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {places.map((place) => (
          <HotelCard
            key={place.id}
            hotel={place}
            setHoverHotel={setSelectedPoint}
          />
        ))}
      </div>
    </section>
  </div>
);
