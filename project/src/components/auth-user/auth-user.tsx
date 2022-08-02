import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import {appDispatch} from '../../types/state-type';


function AuthUser(): JSX.Element {
  const dispatch = useDispatch<appDispatch>();
  function handleLogout() {
    dispatch(logout());
  }
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
        <Link className="header__nav-link" to='#' onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </Fragment>
  );
}

export {AuthUser};
