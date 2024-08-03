import { useSelector } from 'react-redux';
import { FavoritesPlaceItem } from '../../components/favoritesPlaceItem/FavoritesPlaceItem';
import { getFavoritesHotels } from '../../store/selectors';

export const FavoritesPage = () => {
  const favoritesHotels = useSelector(getFavoritesHotels);
  const cities = Array.from(
    new Set(favoritesHotels.map((item) => item.city.name))
  );

  return (
    <div>
      {favoritesHotels ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <FavoritesPlaceItem
                    key={city}
                    city={city}
                    favoritesItems={favoritesHotels.filter(
                      (hotel) => hotel.city.name === city
                    )}
                  />
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  );
};
