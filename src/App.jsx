import { useEffect } from 'react';
import { Router } from './router';
import { useActions } from './redux/store';

import logo from './logo.svg';
import './App.css';

function App() {
  const { validateCode, fetchUser } = useActions(['validateCode', 'fetchUser']);

  useEffect(() => {
    // Initialize some data
    validateCode().finally(() => fetchUser());
  });

  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
