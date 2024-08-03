import { useSelector } from 'react-redux';
import { CitiesTabs } from '../../components/citiesTabs/CitiesTabs';
import { MainHotelsComponent } from '../../components/MainHotelsComponent/MainHotelsComponent';
import { ErrorPage } from '../ErrorPage';
import { getOffersHotels } from '../../store/selectors';

export const MainPage = () => {
  const hotels = useSelector(getOffersHotels);

  if (!hotels) {
    return <ErrorPage />;
  }

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesTabs />
        </div>
        <MainHotelsComponent hotelsList={hotels} />
      </main>
    </div>
  );
};
