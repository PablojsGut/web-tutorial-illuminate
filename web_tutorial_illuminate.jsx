import React from 'react';

const HelpCenter = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-between">
            <div>
              <a className="navbar-brand" href="#">Navbar</a>
            </div>
            <div>
              <a className="nav-link" href="https://www.umayor.cl">Volver a UMayor</a>
            </div>
          </div>
          <div className="container mt-4">
            <div className="input-group mb-3 px-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                aria-label="buscar"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                Button
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {[1, 2, 3, 4].map((item) => (
          <div className="card" key={item}>
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
};

export default HelpCenter;
