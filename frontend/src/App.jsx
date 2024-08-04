import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PendingRequests from "./Components/PendingRequests";
import ReceivedRequests from "./Components/ReceivedRequests";
import Product from "./Pages/Product";
import Profile from "./Components/Profile";
import AddProduct from "./Components/AddProduct";
import Account from "./Pages/Account";
import ProtectedRoute from "./Pages/ProtectedRoute";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Account />,
        children: [
          { path: "", element: <Navigate to={"/home"} /> },
          { path: "/profile", element: <Profile /> },
          { path: "/addproduct", element: <AddProduct /> },
          { path: "/pendingrequests", element: <PendingRequests /> },
          { path: "/receivedrequests", element: <ReceivedRequests /> },
        ],
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
