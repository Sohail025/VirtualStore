import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SentRequests from "./Pages/SentRequests";
import ReceivedRequests from "./Pages/ReceivedRequests";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import AddProduct from "./Pages/AddProduct";
// const router = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   { path: "addproduct", element: <AddProduct /> },
// ]);
export const App = () => {
  return (
    <div>
      <Login />
      {/* <Home /> */}
      {/* <SentRequests />
      <ReceivedRequests />
      <Product />
      <Profile />
      <AddProduct /> */}
    </div>
  );
  // <RouterProvider router={router} />;
};
export default App;
