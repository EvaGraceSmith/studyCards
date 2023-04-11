import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Study Cards</h1>
            <div className="links">
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/createnewstudycards'>Create New Study Cards</NavLink>
                <NavLink className='link' to='/mystudycards'>My Study Cards</NavLink>
                {/* <a href="/">Home</a>
                <a href="/New Card" >New Card</a> */}
            </div>
        </nav>


    );
}

export default Navbar;