import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import {appDispatch} from '../../types/state-type';
import {AppRoute} from '../../const';


function AuthUser(): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to='#' onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}

export {AuthUser};
