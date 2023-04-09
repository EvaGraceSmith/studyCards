import study from './img/study.jpg';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Home from './components/Home';



function App() {
  const name= 'Shiloh'
  return (
    <div className="App">
      <Navbar/>

      <header className="App-header">
      <img src={study} className="study" alt="logo" />
        <h1>
          {name}'s Study Cards
        </h1>
        <Button/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
