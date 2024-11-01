import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="text-4xl ml-96 mb-10">Nav Bar</h2>

            <div className="ml-96 ">
            <Link className="mr-10"  to='/'>Home</Link>
            <NavLink to='/users'>Users</NavLink>
            {/* <Link className="mr-10" to='/users'>Users</Link> */}
            <NavLink className="mr-10" to='/posts'>Posts</NavLink>
            <NavLink className="mr-10" to='/about'>About</NavLink>
            <NavLink className="mr-10" to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;