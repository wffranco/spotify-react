import { useEffect } from 'react';
import { Router } from './router';
import { useActions } from './redux/store';

import Header from './components/header';
import Views from './views';

import './App.scss';

function App() {
  const { validateCode, fetchUser } = useActions(['validateCode', 'fetchUser']);

  useEffect(() => {
    // Initialize some data
    validateCode().finally(() => fetchUser());
  });

  return (
    <Router>
      <div className="App d-flex flex-column">
        <Header />
        <Views />
      </div>
    </Router>
  );
}

export default App;
