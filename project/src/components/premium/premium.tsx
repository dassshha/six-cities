type PremiumProps = {
  className: string,
  isPremium: boolean
}

function Premium({className, isPremium}: PremiumProps): JSX.Element | null {
  return isPremium ? <div className={`${className}__mark`}><span>Premium</span></div> : null;
};
export {Premium};
