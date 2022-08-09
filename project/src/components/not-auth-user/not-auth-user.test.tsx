import {render, screen} from '@testing-library/react';
import {NotAuthUser} from './not-auth-user';
import {BrowserRouter} from 'react-router-dom';

describe('Component: NotAuthUser', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <NotAuthUser/>
      </BrowserRouter>
    );
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
