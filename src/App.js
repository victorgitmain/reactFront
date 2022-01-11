import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My First WebApp
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/victor-romanov-76215b1a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My linkedin
        </a> 
        <a
          className="App-link"
          href="https://github.com/victorgitmain"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
