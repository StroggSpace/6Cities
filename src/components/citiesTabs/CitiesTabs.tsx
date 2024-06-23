import { FC } from 'react';
import { cities } from '../../mocks/offers';

interface Props {
  activeCity: string;
  setActiveCity: (city: string) => void;
}

export const CitiesTabs: FC<Props> = ({ activeCity, setActiveCity }) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <a
            onClick={() => setActiveCity(city)}
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
