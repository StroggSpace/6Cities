import { FC, useState } from 'react';
import { Hotel, Hotels } from '../../types/hotels';
import { useSelector } from 'react-redux';
import { getCity } from '../../store/selectors';
import { SortingOptions } from '../sortingOptions/SortingOptions';
import { HotelsList } from '../hotelsList/HotelsList';
import { Map } from '../map/Map';

interface Props {
  hotelsList: Hotels | undefined;
}

export const MainHotelsComponent: FC<Props> = ({ hotelsList }) => {
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>();
  const activeCity = useSelector(getCity);
  const actualHotelList = hotelsList?.filter(
    (hotel) => hotel.city.name === activeCity
  );

  return (
    <div className="cities">
      {hotelsList ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {actualHotelList?.length} places to stay in {activeCity}
            </b>
            <SortingOptions />
            <HotelsList
              hotelsList={actualHotelList}
              setSelectedPoint={setSelectedPoint}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map
                hotelsList={hotelsList}
                activeCity={activeCity}
                selectedPoint={selectedPoint as Hotel}
              />
            </section>
          </div>
        </div>
      ) : (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">
                We could not find any property available at the moment in
                Dusseldorf
              </p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      )}
    </div>
  );
};
