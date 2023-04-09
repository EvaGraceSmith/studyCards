import { useState } from 'react';

const Button = () => {

    const [name, setName]= useState('Shiloh');
    const [numberOfCards, setNumberOfCards] = useState(10);

    const handleClick = () => {
        setName('Shiloh is creating new study cards, and');
        setNumberOfCards(numberOfCards + 10);
  
    }


    
    return ( 
        <div className='button'>
                    <p>{ name } needs {numberOfCards} study cards</p>
        <button onClick={handleClick}>Create new study cards</button>
       

        </div> 

    );
}
 
export default Button;


