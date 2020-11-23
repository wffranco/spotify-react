import { useEffect } from 'react';
import { Router } from './router';
import { useActions } from './redux/store';

import Header from './components/header';

import logo from './logo.svg';
import './App.scss';

function App() {
  const { validateCode, fetchUser } = useActions(['validateCode', 'fetchUser']);

  useEffect(() => {
    // Initialize some data
    validateCode().finally(() => fetchUser());
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <header className="App-header pt-5">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
