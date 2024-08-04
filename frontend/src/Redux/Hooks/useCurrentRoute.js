import { useLocation } from "react-router-dom";

export const useCurrentRoute = () => {
  const location = useLocation();
  const word = location.pathname.split("/").pop();
  const curruntRoute = word.charAt(0).toUpperCase() + word.slice(1);
  return [curruntRoute];
};
export default useCurrentRoute;
