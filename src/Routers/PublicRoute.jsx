import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PublicRoute({ children }) {
    const isLoggedIn = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(isLoggedIn);
    return !isLoggedIn ? children : <Navigate to={from} />;
}

export default PublicRoute;
