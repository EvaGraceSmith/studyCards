import Button from './Button';
import study from '../img/study.jpg';


const Home = () => {


    return (

        <div className="App-main">
                    <h1>
            Create your own Study Cards
          </h1>
        <img src={study} className="study" alt="logo" />

          <Button/>
        </div>

    );
}

export default Home;