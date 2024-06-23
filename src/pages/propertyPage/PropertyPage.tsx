import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { comments, hotels } from '../../mocks/offers';
import { HotelImg } from '../../components/HotelImg';
import { ReviewComponent } from '../../components/reviewComponent/ReviewComponent';
import { ReviewList } from '../../components/reviewList/ReviewList';
import { NearPlacesList } from '../../components/nearPlacesList/NearPlacesList';
import { Map } from '../../components/map/Map';
import { useState } from 'react';
import { Hotel } from '../../types/hotels';
/* eslint-disable */

export const PropertyPage = () => {
  const { id } = useParams();
  const actualHotel = hotels.find((item) => item.id === Number(id));
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>();

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {actualHotel?.images
                ? actualHotel.images.map((img) => (
                    <HotelImg key={img} src={img} alt={actualHotel.title} />
                  ))
                : null}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {actualHotel?.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">{actualHotel?.title}</h1>
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
                  {actualHotel?.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {actualHotel?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {actualHotel?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {actualHotel?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">
                  &euro;{actualHotel?.price}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {actualHotel?.goods
                    ? actualHotel.goods.map((item) => (
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
                      src={actualHotel?.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {actualHotel?.host.name}
                  </span>
                  <span className="property__user-status">
                    {actualHotel?.host.isPro ? 'Pro' : null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{actualHotel?.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">
                    {comments.length || 0}
                  </span>
                </h2>
                <ReviewList reviewsList={comments} />
                <ReviewComponent />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              hotelsList={hotels}
              activeCity={actualHotel?.city.name || ''}
              selectedPoint={selectedPoint as Hotel}
            />
          </section>
        </section>
        <NearPlacesList places={hotels} setSelectedPoint={setSelectedPoint} />
      </main>
    </div>
  );
};
