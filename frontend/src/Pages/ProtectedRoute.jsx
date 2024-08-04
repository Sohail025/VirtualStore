import Login from "./Login";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const user = true;
  return user ? <Outlet /> : <Login />;
};
export default ProtectedRoute;
