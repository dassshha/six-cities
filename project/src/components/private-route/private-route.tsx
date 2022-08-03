import {Navigate, RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useSelector(getAuthStatus);
  return (authorizationStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.SignIn}/>);
}

export {PrivateRoute};
