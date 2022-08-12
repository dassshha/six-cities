import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {appDispatch} from '../../types/state-type';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute, AuthStatus} from '../../const';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {getAuthStatus} from '../../store/user/selectors';

function SignInScreen(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch<appDispatch>();

  const authorizationStatus = useSelector(getAuthStatus);

  const changeEmailHandler = (evt: ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value);

  const changePasswordHandler = (evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(login({email: email, password: password}));
    if (authorizationStatus === AuthStatus.Auth) {
      return navigate(AppRoute.Main);
    }
  };
  useEffect(() => {
    if (authorizationStatus === AuthStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus]);

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={submitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input value={email} onChange={changeEmailHandler} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input value={password} onChange={changePasswordHandler} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {SignInScreen};
