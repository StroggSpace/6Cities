import { FC } from 'react';
import { Comments } from '../../types/comments';
import { ReviewItem } from '../reviewItem/ReviewItem';

interface Props {
  reviewsList: Comments;
}

export const ReviewList: FC<Props> = ({ reviewsList }) => (
  <ul className="reviews__list">
    {reviewsList.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);
