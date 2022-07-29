import {Navigate, RouteProps} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {StateType} from '../../types/state-type';
import {connect, ConnectedProps} from 'react-redux';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element
}

function mapStateToProps({authorizationStatus}: StateType) {
  return {authorizationStatus};
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PrivateRouteProps & PropsFromRedux;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {authorizationStatus, children} = props;
  return (authorizationStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.SignIn}/>);
}

export {PrivateRoute};
export default connector(PrivateRoute);
