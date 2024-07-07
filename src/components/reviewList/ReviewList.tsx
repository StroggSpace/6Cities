import { FC } from 'react';
import { Comments } from '../../types/comments';
import { ReviewItem } from '../reviewItem/ReviewItem';

interface Props {
  reviewsList: Comments | undefined;
}

export const ReviewList: FC<Props> = ({ reviewsList }) => {
  if (!reviewsList) {
    return null;
  }

  return (
    <ul className="reviews__list">
      {reviewsList.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
