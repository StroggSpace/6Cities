import { hotels } from '../../mocks/offers';
import { Link } from 'react-router-dom';

interface Props {
  hotel: (typeof hotels)[number];
  setHoverHotel?: (id: number) => void;
}

export const HotelCard = ({ hotel, setHoverHotel }: Props) => (
  <article
    className='cities__place-card place-card'
    onMouseEnter={() => setHoverHotel && setHoverHotel(hotel.id)}
  >
    {hotel.isPremium ? (
      <div className='place-card__mark'>
        <span>Premium</span>
      </div>
    ) : null}

    <div className='cities__image-wrapper place-card__image-wrapper'>
      <Link to={`/offer/${hotel.id}`}>
        <img
          className='place-card__image'
          src={hotel.previewImage}
          width='260'
          height='200'
          alt={hotel.title}
        />
      </Link>
    </div>
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{hotel.price}</b>
          <span className='place-card__price-text'>&#47;&nbsp;night</span>
        </div>
        <button
          className='place-card__bookmark-button button'
          type='button'
        >
          <svg
            className='place-card__bookmark-icon'
            width='18'
            height='19'
          >
            <use xlinkHref='#icon-bookmark'></use>
          </svg>
          <span className='visually-hidden'>To bookmarks</span>
        </button>
      </div>
      <div className='place-card__rating rating'>
        <div className='place-card__stars rating__stars'>
          <span style={{ width: '80%' }}></span>
          <span className='visually-hidden'>Rating</span>
        </div>
      </div>
      <h2 className='place-card__name'>
        <Link to={`/offer/${hotel.id}`}>{hotel.title}</Link>
      </h2>
      <p className='place-card__type'>{hotel.type}</p>
    </div>
  </article>
);
