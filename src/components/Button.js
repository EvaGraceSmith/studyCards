import { useState } from 'react';

const Button = () => {

    const handleClick = () => {
        console.log('Hello, students!', );
    }


    
    return ( 
        <div className='button'>
        <button onClick={handleClick}>Create new study cards</button>
       
        
        </div> 

    );
}
 
export default Button;


