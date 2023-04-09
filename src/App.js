import study from './img/study.jpg';

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

      <header className="App-header">
      <img src={study} className="study" alt="logo" />

        <Button/>


      </header>
      <Home/>
    </div>
  );
}

export default App;
