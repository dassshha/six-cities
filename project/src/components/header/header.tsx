import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';
import {AuthUser} from '../auth-user/auth-user';
import {NotAuthUser} from '../not-auth-user/not-auth-user';
import {AuthStatus} from '../../const';

function mapStateToProps({authorizationStatus}: StateType) {
  return {authorizationStatus};
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;
function Header({authorizationStatus}: ConnectedComponentProps): JSX.Element {
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
export default connector(Header);
