import {FormEvent, Fragment} from 'react';
import {AppRoute, AuthStatus} from '../../const';
import {Link, useNavigate} from 'react-router-dom';
import {ActionsType, ThunkActionResult} from '../../types/action-type';
import {StateType} from '../../types/state-type';
import {bindActionCreators, Dispatch} from 'redux';
import {logout} from '../../store/api-actions';
import {connect, ConnectedProps} from 'react-redux';

// function mapStateToProps({authorizationStatus}: StateType) {
//   return {authorizationStatus};
// }

function mapDispatchToProps(dispatch: Dispatch<ActionsType>) {
  return bindActionCreators({
    handleLogout: logout
  }, dispatch);
}

const connector = connect(null,mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function AuthUser({handleLogout}: ConnectedComponentProps): JSX.Element {
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
export default connector(AuthUser);
