import { Link } from 'react-router-dom';
import { CardFavoriteButton } from '../CardFavoriteButton';
import { Hotel } from '../../types/hotels';

export const FavoriteHotelCard = ({ hotel }: { hotel: Hotel }) => (
  <article className="favorites__card place-card">
    {hotel.isPremium ? (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    ) : null}

    <div className="favorites__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${hotel.id}`}>
        <img
          className="place-card__image"
          src={hotel.previewImage}
          width="150"
          height="110"
          alt={hotel.title}
        />
      </Link>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{hotel.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <CardFavoriteButton hotel={hotel} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: '100%' }}></span>
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
