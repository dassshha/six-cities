import {useSelector} from 'react-redux';
import {AuthUser} from '../auth-user/auth-user';
import {NotAuthUser} from '../not-auth-user/not-auth-user';
import {AppRoute, AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/user/selectors';
import {Link} from 'react-router-dom';

function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthStatus.Auth ? <AuthUser/> : <NotAuthUser/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
