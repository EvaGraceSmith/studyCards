const Button = () => {

    const handleClick = () => {
        console.log('Hello, students!');
    }
    return (  
        <button onClick={handleClick}>Create new study cards</button>
    );
}
 
export default Button;


