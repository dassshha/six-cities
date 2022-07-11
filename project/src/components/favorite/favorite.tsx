type FavoriteProps = {
  className: string,
  isFavorite: boolean,
  size: {
    width: number,
    height: number
  }
}

function Favorite({className, isFavorite, size}: FavoriteProps): JSX.Element {
  return (
    <button className={`${className}__bookmark-button ${isFavorite && `${className}__bookmark-button--active`} button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export {Favorite};
