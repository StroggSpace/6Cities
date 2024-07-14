import { FC, useState } from 'react';
import { ReviewItem } from '../reviewItem/ReviewItem';
import { useSelector } from 'react-redux';
import { getStateAuthStatus } from '../../store/selectors';
import { ReviewComponent } from '../reviewComponent/ReviewComponent';
import { useComments } from '../../api/apiHooks/useComments';

interface Props {
  id?: string;
}

export const ReviewList: FC<Props> = ({ id }) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const { comments, error } = useComments(id, toggleUpdate);
  const authStatus = useSelector(getStateAuthStatus);

  if (!comments) {
    return null;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length || 0}</span>
      </h2>
      <ul className="reviews__list">
        {comments &&
          !error.status &&
          comments.map((reviewItem) => (
            <ReviewItem key={reviewItem.id} review={reviewItem} />
          ))}
      </ul>
      {authStatus && id ? (
        <ReviewComponent
          id={id}
          updateComment={() => setToggleUpdate(!toggleUpdate)}
        />
      ) : null}
    </section>
  );
};
