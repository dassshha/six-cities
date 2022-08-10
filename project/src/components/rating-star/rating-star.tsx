import {Fragment} from 'react';

type RatingStarProps = {
  value: number,
  title: string,
}

function RatingStar({value, title}: RatingStarProps): JSX.Element {
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33" data-testid='Star'>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export {RatingStar};
