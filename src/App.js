import React { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Secret from './Secret';

export default class App extends Component {
  render() {
  return (
    <div className="App">
 <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/secret">Secret</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={Secret} />
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
