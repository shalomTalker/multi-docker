import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Link to='/'>Home</Link>
         <Link to='/other'>Other Page</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
          <div>
            <Route exact path='/' component={Fib}></Route>
            <Route exact path='/other' component={OtherPage}></Route>
          </div>
      </div>
    </Router>
  );
}

export default App;
