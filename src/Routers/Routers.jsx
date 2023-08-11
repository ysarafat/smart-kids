import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Course from '../pages/Course/Course';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const routers = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
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
