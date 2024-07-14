import { FC, useState } from 'react';
import { sentComment } from '../../api/api';

interface Props {
  id: string;
  updateComment: () => void;
}

export const ReviewComponent: FC<Props> = ({ id, updateComment }) => {
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });
  const changeInput = (value: string) => {
    setReview({ ...review, comment: value });
  };

  const changeRating = (value: number) => {
    setReview({ ...review, rating: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sentComment(id, review);
    setReview({ comment: '', rating: 0 });
    updateComment();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          required
          value="5"
          checked={review.rating === 5}
          id="5-stars"
          type="radio"
          onChange={() => changeRating(5)}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          checked={review.rating === 4}
          id="4-stars"
          type="radio"
          onChange={() => changeRating(4)}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          checked={review.rating === 3}
          id="3-stars"
          type="radio"
          onChange={() => changeRating(3)}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          checked={review.rating === 2}
          id="2-stars"
          type="radio"
          onChange={() => changeRating(2)}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          checked={review.rating === 1}
          id="1-star"
          type="radio"
          onChange={() => changeRating(1)}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        maxLength={50}
        required
        onChange={(e) => changeInput(e.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!review.comment || review.rating < 1}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
