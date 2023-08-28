import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();
    const location = useLocation();
    return isLoggedIn ? children : <Navigate state={{ from: location }} to="/signin" replace />;
}

export default PrivateRoute;
