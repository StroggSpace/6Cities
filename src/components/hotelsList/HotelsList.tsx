import { useState } from 'react';
import { hotels } from '../../mocks/offers';
import { HotelCard } from '../hotelCard/HotelCard';
/* eslint-disable */
interface Props {
  hotelsList: typeof hotels | undefined;
}

export const HotelsList = ({ hotelsList }: Props) => {
  const [isHoverHotel, setIsHoverHotel] = useState<number | null>(null);

  return (
    <div className='cities__places-list places__list tabs__content'>
      {hotelsList
        ? hotelsList.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              setHoverHotel={setIsHoverHotel}
            />
          ))
        : null}
    </div>
  );
};
