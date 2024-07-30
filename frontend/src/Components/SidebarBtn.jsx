import PropTypes from "prop-types";
import {
  AccountBox,
  Inventory2,
  Outbox,
  GetApp,
  Window,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export const SidebarBtn = ({ name }) => {
  const profile = name === "Profile";
  const addproduct = name === "Add New Product";
  const rRequests = name === "Recieved Requests";
  const pRequests = name === "Pending Requests";
  const home = name === "Home";
  return (
    <Link
      to={
        (profile && "/account/profile") ||
        (addproduct && "/account/addproduct") ||
        (rRequests && "/account/receivedrequests") ||
        (pRequests && "/account/pendingrequests") ||
        (home && "/home")
      }
    >
      <div className=" hover:bg-[#5C5F6A] hover:text-black hover:bg-opacity-10 w-44 indent-2 py-2 rounded text-[#5C5F6A] text-start text-nowrap flex flex-row items-center gap-1 cursor-pointer text-[0.85rem]">
        {profile && <AccountBox />}
        {addproduct && <Inventory2 />}
        {rRequests && <Outbox />}
        {pRequests && <GetApp />}
        {home && <Window />}
        {name}
      </div>
    </Link>
  );
};
SidebarBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SidebarBtn;
