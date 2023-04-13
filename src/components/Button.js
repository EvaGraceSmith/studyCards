import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {

    const navigate = useNavigate();
    // const [name, setName]= useState('Shiloh');
    // const [numberOfCards, setNumberOfCards] = useState(10);

    const handleClick = () => {
        // setName('Shiloh is creating new study cards, and');
        // setNumberOfCards(numberOfCards + 10);
        navigate('/createnewstudycards');
    }


    
    return ( 
        <div className='button'>
                    {/* <p>{ name } needs {numberOfCards} study cards</p> */}
        <button onClick={handleClick}>Create new study cards</button>
       

        </div> 

    );
}
 
export default Button;


