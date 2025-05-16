import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Ensure you import the App component
import Register from './pages/Register';
import Login from './pages/Login';

function Route() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/auth',
            children: [
                {
                    path: 'register',
                    element: <Register />,
                },
                {
                    path: 'login',
                    element: <Login/>
                }
            ]
        }
    ]);

    return <RouterProvider router={routes} />;
}

export default Route;
