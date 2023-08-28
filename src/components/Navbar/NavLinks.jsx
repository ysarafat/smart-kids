import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <div>
            <ul className="flex gap-6 text-[16px] font-medium">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us"> About Us</Link>
                </li>
                <li>
                    <Link to="/courses">Course</Link>
                </li>
                <li>
                    <Link to="/signin">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;
