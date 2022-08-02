import {useSelector} from 'react-redux';
import {AuthUser} from '../auth-user/auth-user';
import {NotAuthUser} from '../not-auth-user/not-auth-user';
import {AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/user/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
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
