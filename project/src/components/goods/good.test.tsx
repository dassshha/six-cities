import {render, screen} from '@testing-library/react';
import {offers} from '../../mocks/offers';
import {Goods} from './goods';

const fakeGoods = offers[0].goods;

describe('Component: Goods', () => {
  it('should render correctly', () => {
    render(
      <Goods goods={fakeGoods}/>
    );
    expect(screen.getAllByRole('good')).toHaveLength(fakeGoods.length);
  });
});
