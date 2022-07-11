type RatingProps = {
  className: string,
  value: number
};

function Rating({className, value}: RatingProps):JSX.Element {
  return (
    <div className={`${className}__stars rating__stars`}>
      <span style={{width: `${Math.round(value) * 20}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export {Rating};
