import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Course from '../pages/Course/Course';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/courses',
                element: <Course />,
            },
        ],
    },
]);

export default routers;
