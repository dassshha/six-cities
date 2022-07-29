import {FormEvent, Fragment} from 'react';
import {AppRoute, AuthStatus} from '../../const';
import {useNavigate} from 'react-router-dom';

function AuthUser(): JSX.Element {
  return (
    <Fragment>
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        </a>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </Fragment>
  );
}

export {AuthUser};
