const Button = () => {

    const handleClick = (e) => {
        console.log('Hello, students!', e);
    }

        const handleClickAgain = (name) => {
            console.log('Hello, ' + name);
        }
    
    return ( 
        <div className='button'>
        <button onClick={handleClick}>Create new study cards</button>
        <button onClick={()=>handleClickAgain('Shiloh')}>Click me again</button>
        
        </div> 

    );
}
 
export default Button;


