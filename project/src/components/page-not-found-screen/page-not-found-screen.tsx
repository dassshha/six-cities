import './style.css';

function PageNotFoundScreen(): JSX.Element {
  return (
    <section id="wrapper" className="container-fluid">
      <div className="error-box" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="error-body text-center">
          <h1 className="text-danger">404</h1>
          <h3>Page Not Found !</h3>
          <a href="/" className="btn btn-danger btn-rounded m-b-40">Back to home</a>
        </div>
      </div>
    </section>
  );
}

export {PageNotFoundScreen};
