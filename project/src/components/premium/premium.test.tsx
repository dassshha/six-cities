import {render, screen} from '@testing-library/react';
import {Premium} from './premium';

const fakePremium = {
  isPremium: true,
  className: 'fakeClassName'
};

describe('Component: Premium', () => {
  it('should render correctly when premium is true', () => {
    render(
      <Premium {...fakePremium}/>
    );
    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });

  it('should not render anything when premium is false', () => {
    fakePremium.isPremium = false;
    render(
      <Premium {...fakePremium}/>
    );
    expect(screen.queryByText(/Premium/i)).not.toBeInTheDocument();
  });
});
