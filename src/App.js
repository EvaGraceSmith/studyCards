import study from './img/study.jpg';
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  const name= 'Shiloh'
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <header className="App-header">
      <img src={study} className="study" alt="logo" />
<Title name='Shiloh'/>
        <h1>
          {name}'s Study Cards
        </h1>
        <Button/>
<Cards/>
      </header>
    </div>
  );
}

export default App;
