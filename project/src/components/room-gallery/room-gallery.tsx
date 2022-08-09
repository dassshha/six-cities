type RoomGalleryProps = {
  images: string[]
}

function RoomGallery({images}: RoomGalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Photo studio"/>
          </div>))}
      </div>
    </div>
  );
}
export {RoomGallery};
