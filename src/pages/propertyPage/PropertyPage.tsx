import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { HotelImg } from '../../components/HotelImg';
import { ReviewList } from '../../components/reviewList/ReviewList';
import { NearPlacesList } from '../../components/nearPlacesList/NearPlacesList';
import { Map } from '../../components/map/Map';
import { useState } from 'react';
import { Hotel } from '../../types/hotels';
import { useHotel } from '../../api/apiHooks/useHotel';
import { useNearby } from '../../api/apiHooks/useNearby';
/* eslint-disable */

export const PropertyPage = () => {
  const { id } = useParams();
  const { hotel, isLoading, error: hotelError } = useHotel(id);
  const nearbyHotels = useNearby(id);
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hotelError.status === 404) {
    window.location.href = '/not-found';
  } else if (hotelError.status) {
    return <div>Error: {hotelError.message}</div>;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotel?.images
                ? hotel.images.map((img) => (
                    <HotelImg key={img} src={img} alt={hotel.title} />
                  ))
                : null}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotel?.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{hotel?.title}</h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {hotel?.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {hotel?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotel?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {hotel?.goods
                    ? hotel.goods.map((item) => (
                        <li className="property__inside-item" key={item}>
                          {item}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={hotel?.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {hotel?.host.name}
                  </span>
                  <span className="property__user-status">
                    {hotel?.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{hotel?.description}</p>
                </div>
              </div>
              <ReviewList id={id && id} />
            </div>
          </div>
          {nearbyHotels.length ? (
            <section className="property__map map">
              <Map
                hotelsList={nearbyHotels}
                activeCity={hotel?.city.name || ''}
                selectedPoint={selectedPoint as Hotel}
              />
            </section>
          ) : null}
        </section>
        {nearbyHotels.length ? (
          <NearPlacesList
            places={nearbyHotels}
            setSelectedPoint={setSelectedPoint}
          />
        ) : null}
      </main>
    </div>
  );
};
