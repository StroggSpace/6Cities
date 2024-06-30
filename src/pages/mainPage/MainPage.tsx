import { HotelsList } from '../../components/hotelsList/HotelsList';
import { Header } from '../../components/header/Header';
import { Map } from '../../components/map/Map';
import { useState } from 'react';
import { CitiesTabs } from '../../components/citiesTabs/CitiesTabs';
import { Hotel, Hotels } from '../../types/hotels';
import { useSelector } from 'react-redux';
import { getCity } from '../../store/selectors';
import { SortingOptions } from '../../components/sortingOptions/SortingOptions';

interface Props {
  hotelsList: Hotels;
}

export const MainPage = ({ hotelsList }: Props) => {
  const activeCity = useSelector(getCity);
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>();
  const actualHotelList = hotelsList.filter(
    (hotel) => hotel.city.name === activeCity
  );

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesTabs activeCity={activeCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {actualHotelList.length} places to stay in {activeCity}
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
        </div>
      </main>
    </div>
  );
};
