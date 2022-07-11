type FavoriteProps = {
  className: string,
  isFavorite: boolean
}

function Favorite({className, isFavorite}: FavoriteProps): JSX.Element {
  return (
    <button className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`} type="button">
      <svg className="property__bookmark-icon" width={31} height={33}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export {Favorite};
