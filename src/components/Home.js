import Button from './Button';
import study from '../img/study.jpg';


const Home = () => {
    const name= 'Shiloh'

    return (

        <header className="App-header">
        <img src={study} className="study" alt="logo" />
          <h1>
            {name}'s Study Cards
          </h1>
          <Button/>
        </header>

    );
}

export default Home;