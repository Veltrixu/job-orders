import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Ensure you import the App component
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import JobOrders from "./pages/Dashboard/JobOrders";
import PendingOrders from "./pages/Dashboard/PendingOrders";
import InProgressOrders from "./pages/Dashboard/InProgressOrders";
import AllOrders from "./pages/Dashboard/AllOrders";
import OnHoldOrders from "./pages/Dashboard/OnHoldOrders";
import CancelledOrders from "./pages/Dashboard/CancelledOrders";
import CompletedOrders from "./pages/Dashboard/CompletedOrders";
import Logout from "./pages/Authentication/Logout";

function Route() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <h1>Hello</h1>,
        },
        {
          path: "job-orders",
          element: <JobOrders />,
          children: [
            {
              path: "",
              element: <AllOrders />,
            },
            {
              path: "pending",
              element: <PendingOrders />,
            },
            {
              path: "in-progress",
              element: <InProgressOrders />,
            },
            {
              path: "on-hold",
              element: <OnHoldOrders />,
            },
            {
              path: "cancelled",
              element: <CancelledOrders />,
            },
            {
              path: "completed",
              element: <CompletedOrders />,
            },
          ],
        },
        {
          path: "reports",
          element: <div>Reports Page</div>,
        },
        {
          path: "staff",
          element: <h1>Staff</h1>,
        },
        {
          path: "settings",
          element: <h1>Settings</h1>,
        },
      ],
    },
    {
      path: "/auth",
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default Route;
