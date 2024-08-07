import { Link } from 'react-router-dom';
import { Hotel } from '../../types/hotels';
import { CardFavoriteButton } from '../CardFavoriteButton';

interface Props {
  hotel: Hotel;
  setHoverHotel?: (hotel: Hotel | undefined) => void;
}

export const HotelCard = ({ hotel, setHoverHotel }: Props) => (
  <article
    className="cities__place-card place-card"
    onMouseEnter={setHoverHotel ? () => setHoverHotel(hotel) : undefined}
    onMouseLeave={setHoverHotel ? () => setHoverHotel(undefined) : undefined}
  >
    {hotel.isPremium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${hotel.id}`}>
        <img
          className="place-card__image"
          src={hotel.previewImage}
          width="260"
          height="200"
          alt={hotel.title}
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{hotel.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <CardFavoriteButton hotel={hotel} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${hotel.id}`}>{hotel.title}</Link>
      </h2>
      <p className="place-card__type">{hotel.type}</p>
    </div>
  </article>
);
