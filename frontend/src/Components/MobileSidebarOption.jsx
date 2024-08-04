import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const MobileSidebarOption = ({ item }) => {
  const profile = item === "Profile";
  const Home = item === "Home";
  const addproduct = item === "Add New Product";
  const pendingrequests = item === "Pending Requests";

  return (
    <Link
      to={
        profile
          ? "/profile"
          : Home
          ? "/Home"
          : addproduct
          ? "/addproduct"
          : pendingrequests
          ? "/pendingrequests"
          : "/receivedrequests"
      }
    >
      <div className="hover:bg-[#000] hover:bg-opacity-5 mx-4 py-2 rounded cursor-pointer">
        {item}
      </div>
    </Link>
  );
};
MobileSidebarOption.propTypes = {
  item: PropTypes.string.isRequired,
};
export default MobileSidebarOption;
