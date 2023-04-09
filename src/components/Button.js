import { useState } from 'react';

const Button = () => {

    const [name, setName]= useState('Shiloh');

    const handleClick = () => {
        setName('Shiloh is creating new study cards');
  
    }


    
    return ( 
        <div className='button'>
                    <p>{ name }</p>
        <button onClick={handleClick}>Create new study cards</button>
       

        </div> 

    );
}
 
export default Button;


