import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <main className="App-main">
        <p>Main</p>
      </main>
      <footer className="App-footer">
        <div className="App-footer-copyright">
          <FontAwesomeIcon className="App-footer-icon" icon={faCopyright} /> Joséphine Herlemont
        </div>
      </footer>
    </div>
  );
}

export default App;
