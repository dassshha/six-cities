import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotAuthUser(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link to={AppRoute.SignIn} className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

export {NotAuthUser};
