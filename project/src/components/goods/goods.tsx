type GoodsProps = {
  goods: string[]
};

function Goods({goods}: GoodsProps): JSX.Element {
  return (
    <ul className="property__inside-list">
      {goods.map((good) => <li data-testid='Good' key={good} className="property__inside-item">{good}</li>)}
    </ul>
  );
}

export {Goods};
