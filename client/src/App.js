import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import WedstrijdList from "./components/wedstrijd-list.component";

function App() {
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="https://www.hetautomatiseringshuis.nl" target="_blank">
                  </a>
                  <Link to="/" className="navbar-brand">Het Automatiseringshuis Toernooi 2019</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Wedstrijden</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/poules" className="nav-link">Poules</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br/>
              <h3>Komende wedstrijden</h3>
              <Route path="/" exact component={WedstrijdList} />
              <Route path="/poules" component={WedstrijdList} />
              <br/>
              <div className="row">
                  <div className="col-sm">
                      <h4>E1 Poule</h4>
                      <WedstrijdList/>
                  </div>
                  <div className="col-sm">
                      <h4>E2 Poule</h4>
                      <WedstrijdList/>
                  </div>
              </div>

          </div>
      </Router>
  );
}

export default App;
