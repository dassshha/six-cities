import {Review} from '../review/review';
import {ReviewsListType} from '../../types/reviews-list-type';

type ReviewsListProps = {
  reviews: ReviewsListType
};

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} {...review}/>)}
    </ul>
  );
}

export {ReviewsList};
