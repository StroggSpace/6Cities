/* eslint-disable indent */
import { FC } from 'react';
import { Hotel, Hotels } from '../../types/hotels';
import { HotelCard } from '../hotelCard/HotelCard';
interface Props {
  hotelsList: Hotels | undefined;
  setSelectedPoint: (hotel: Hotel | undefined) => void;
}

export const HotelsList: FC<Props> = ({ hotelsList, setSelectedPoint }) => (
  <div className="cities__places-list places__list tabs__content">
    {hotelsList
      ? hotelsList.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            setHoverHotel={setSelectedPoint}
          />
        ))
      : null}
  </div>
);
