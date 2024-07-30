import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PendingRequests from "./Components/PendingRequests";
import ReceivedRequests from "./Components/ReceivedRequests";
import Product from "./Pages/Product";
import Profile from "./Components/Profile";
import AddProduct from "./Components/AddProduct";
import Account from "./Pages/Account";
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  {
    path: "/account",
    element: <Account />,
    children: [
      { path: "/account/profile", element: <Profile /> },
      { path: "/account", element: <Profile /> },
      { path: "/account/addproduct", element: <AddProduct /> },
      { path: "/account/pendingrequests", element: <PendingRequests /> },
      { path: "/account/receivedrequests", element: <ReceivedRequests /> },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
