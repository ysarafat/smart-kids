import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Course from '../pages/Course/Course';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PublicRoute from './PublicRoute';
import PrivateRoute from './privateRoute';

const routers = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/signin',
                element: <Login />,
            },
            {
                path: '/signup',
                element: (
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                ),
            },
            {
                path: '/courses',
                element: (
                    <PrivateRoute>
                        <Course />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default routers;
