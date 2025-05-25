import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; // Ensure you import the App component
import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import AdminDashboard from './Dashboard/AdminDashboard';

function Route() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '',
                    element: <AdminDashboard />,
                },
                {
                    path: 'reports',
                    element: <div>Reports Page</div>,
                }
            ]
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
                    element: <Login />
                }
            ]
        }
    ]);

    return <RouterProvider router={routes} />;
}

export default Route;
