import study from './img/study.jpg';
import './App.css';


const Title = (props) => {
  return <h1> <i>{props.name}'s </i>Study Cards</h1>
}

function App() {
  const name= 'Shiloh'
  return (
    <div className="App">
      <header className="App-header">
      <img src={study} className="study" alt="logo" />
<Title name='Shiloh'/>
        <h1>
          {name}'s Study Cards
        </h1>
<button onClick={()=>alert('New Study Cards')}>Create new study cards</button>
      </header>
    </div>
  );
}

export default App;
