import Copyright from '../Copyright/Copyright';
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
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
