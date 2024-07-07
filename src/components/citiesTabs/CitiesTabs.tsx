import { FC } from 'react';
import { CITIES } from '../../utils/consts';
import { useDispatch } from 'react-redux';
import { setCity } from '../../store/action';

interface Props {
  activeCity: string;
}

export const CitiesTabs: FC<Props> = ({ activeCity }) => {
  const dispatch = useDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <a
              onClick={() => dispatch(setCity(city))}
              className={`locations__item-link tabs__item ${
                activeCity === city ? 'tabs__item--active' : ''
              }`}
              href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
