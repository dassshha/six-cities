import {Navigate, RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus,
  children: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;
  return (authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.SignIn}/>);
}

export {PrivateRoute};
