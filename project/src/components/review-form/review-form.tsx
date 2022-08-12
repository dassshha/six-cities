import {RatingStar} from '../rating-star/rating-star';
import {RATING} from '../../const';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {appDispatch} from '../../types/state-type';
import {postComment} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentOffer} from '../../store/data/selectors';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const offer = useSelector(getCurrentOffer);
  const dispatch = useDispatch<appDispatch>();


  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(postComment({comment, rating}, offer.id));
    setRating(0);
    setComment('');
    isButtonBlocked();
  }
  function isButtonBlocked() {
    if (comment.length < 50 || comment.length > 300 || !rating) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  useEffect(() => {
    isButtonBlocked();
  }, [rating, comment]);
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <h1>{rating}</h1>
      <h1>{comment}</h1>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={(evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value))}>
        <RatingStar title={RATING.PERFECT.title} value={RATING.PERFECT.value}/>
        <RatingStar title={RATING.GOOD.title} value={RATING.GOOD.value}/>
        <RatingStar title={RATING.NOT_BAD.title} value={RATING.NOT_BAD.value}/>
        <RatingStar title={RATING.BADLY.title} value={RATING.BADLY.value}/>
        <RatingStar title={RATING.TERRIBLY.title} value={RATING.TERRIBLY.value}/>
      </div>
      <textarea value={comment} onChange={(evt) => setComment(evt.target.value)} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={300} minLength={50}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export {ReviewForm};
