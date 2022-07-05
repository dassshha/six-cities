import {RatingStar} from '../rating-star/rating-star';
import {RATING} from '../../const';
import {ChangeEvent, useState} from 'react';

function CommentForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={(evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value))}>
        <RatingStar title={RATING.PERFECT.title} value={RATING.PERFECT.value}/>
        <RatingStar title={RATING.GOOD.title} value={RATING.GOOD.value}/>
        <RatingStar title={RATING.NOT_BAD.title} value={RATING.NOT_BAD.value}/>
        <RatingStar title={RATING.BADLY.title} value={RATING.BADLY.value}/>
        <RatingStar title={RATING.TERRIBLY.title} value={RATING.TERRIBLY.value}/>
      </div>
      <textarea value={comment} onChange={(evt) => setComment(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <h1>{comment}</h1>
      <h1>{rating}</h1>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export {CommentForm};
