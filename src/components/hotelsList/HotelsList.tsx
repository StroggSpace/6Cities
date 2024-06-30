/* eslint-disable indent */
import { FC } from 'react';
import { Hotel, Hotels } from '../../types/hotels';
import { HotelCard } from '../hotelCard/HotelCard';
import { useSelector } from 'react-redux';
import { getSorting } from '../../store/selectors';
interface Props {
  hotelsList: Hotels | undefined;
  setSelectedPoint: (hotel: Hotel | undefined) => void;
}

interface SortMethod {
  [key: string]: (a: Hotel, b: Hotel) => number;
}

export const HotelsList: FC<Props> = ({ hotelsList, setSelectedPoint }) => {
  const activeSortingOption = useSelector(getSorting);

  const sortMethod: SortMethod = {
    POPULAR: () => 0,
    LOW_TO_HIGH: (a: Hotel, b: Hotel) => a.price - b.price,
    HIGH_TO_LOW: (a: Hotel, b: Hotel) => b.price - a.price,
    TOP_RATED_FIRST: (a: Hotel, b: Hotel) => b.rating - a.rating,
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotelsList
        ? hotelsList
            .sort(sortMethod[activeSortingOption] || sortMethod.POPULAR)
            .map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                setHoverHotel={setSelectedPoint}
              />
            ))
        : null}
    </div>
  );
};
