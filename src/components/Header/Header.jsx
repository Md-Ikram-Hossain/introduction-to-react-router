import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           
           <nav>
            <span>My website using react</span>
            <Link to="/">Home</Link>
            {/* <Link to="/Posts">Posts</Link>
            <Link to="/about">About</Link> */}
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/contact">Contact Us</Link>
            <Link to="/Users">Users</Link>
           </nav>
        </div>
    );
};

export default Header;