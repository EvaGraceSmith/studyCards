import logo from './logo.svg';
import study from './img/study.jpg';
import './App.css';

function App() {
  const name= 'Shiloh'
  return (
    <div className="App">
      <header className="App-header">
      <img src={study} className="study" alt="logo" />

        <h1>
          {name}'s Study Cards
        </h1>
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
  );
}

export default App;
