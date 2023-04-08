const Button = () => {

    const handleClick = () => {
        console.log('Hello, students!');

        const handleClickAgain = (name) => {
            console.log('Hello, ' + name);
        }
    }
    return ( 
        <div className='button'>
                <button onClick={handleClick}>Create new study cards</button>
        <button onClick={()=>{
            console.log("Hello")
        }}>Click me again</button>
        
        </div> 

    );
}
 
export default Button;


