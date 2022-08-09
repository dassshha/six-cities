import {render, screen} from '@testing-library/react';
import {RoomGallery} from './room-gallery';
import {offers} from '../../mocks/offers';

const fakeImages = offers[0].images;

describe('Component: RoomGallery', () => {
  it('should render correctly', () => {
    render(
        <RoomGallery images={fakeImages}/>
    );
    expect(screen.getAllByAltText(/Photo studio/i)).toHaveLength(fakeImages.length);
  });
});
