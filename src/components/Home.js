import Button from './Button';
import study from '../img/study.jpg';


const Home = () => {


    return (

        <div className="App-main">
        <img src={study} className="study" alt="logo" />
          <h1>
            Create your own Study Cards
          </h1>
          <Button/>
        </div>

    );
}

export default Home;