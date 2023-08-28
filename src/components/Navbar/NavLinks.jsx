import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignOut } from '../../feature/auth/authSlice';
import useAuth from '../../hooks/useAuth';

function NavLinks() {
    const checkedAuth = useAuth();
    const dispatch = useDispatch();
    const handelLogout = () => {
        dispatch(userSignOut());
        localStorage.clear();
    };
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
                {!checkedAuth && (
                    <li>
                        <Link to="/signin">Login</Link>
                    </li>
                )}
                {checkedAuth && (
                    <li>
                        <button onClick={handelLogout}>Sign Out</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default NavLinks;
