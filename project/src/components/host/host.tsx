import {HostType} from '../../types/offer-type';

type HostProps = {
  host: HostType
}

function Host({host}: HostProps): JSX.Element {
  return (
    <div className="property__host-user user">
      <div className={`property__avatar-wrapper ${host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
        <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar"/>
      </div>
      <span className="property__user-name">{host.name}</span>
      {host.isPro && <span className="property__user-status">Pro</span>}
    </div>
  );
}

export {Host};
