import { CITIES } from '../../utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { getCity } from '../../store/selectors';
import { setCity } from '../../store/hotelsSlice';

export const CitiesTabs = () => {
  const dispatch = useDispatch();
  const activeCity = useSelector(getCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <div
              onClick={() => dispatch(setCity(city))}
              style={{ cursor: 'pointer' }}
              className={`locations__item-link tabs__item ${
                activeCity === city ? 'tabs__item--active' : ''
              }`}
            >
              <span>{city}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
