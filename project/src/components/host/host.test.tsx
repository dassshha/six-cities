import {render, screen} from '@testing-library/react';
import {Host} from './host';
import {offers} from '../../mocks/offers';

const fakeHost = offers[0].host;

describe('Component: Host', () => {
  it('should render correctly', () => {
    render(
      <Host host={fakeHost}/>
    );
    expect(screen.getByAltText(/Host avatar/i)).toBeInTheDocument();
    expect(screen.getByText(fakeHost.name)).toBeInTheDocument();
  });

  it('should render pro label if host is pro', () => {
    fakeHost.isPro = true;
    render(
      <Host host={fakeHost}/>
    );
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('should not render pro label if host is not pro', () => {
    fakeHost.isPro = false;
    render(
      <Host host={fakeHost}/>
    );
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
  });
});
