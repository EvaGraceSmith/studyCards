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
<button onClick={()=>alert('New Study Cards')}>Create new study cards</button>
      </header>
    </div>
  );
}

export default App;
