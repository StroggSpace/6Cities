import { Header } from '../../components/header/Header';
import { CitiesTabs } from '../../components/citiesTabs/CitiesTabs';
import { Hotels } from '../../types/hotels';
import { MainHotelsComponent } from '../../components/MainHotelsComponent/MainHotelsComponent';

interface Props {
  hotelsList: Hotels;
}

export const MainPage = ({ hotelsList }: Props) => (
  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesTabs />
      </div>
      <MainHotelsComponent hotelsList={hotelsList} />
    </main>
  </div>
);
