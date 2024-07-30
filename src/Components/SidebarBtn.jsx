import PropTypes from "prop-types";
import {
  AccountBox,
  Inventory2,
  Outbox,
  GetApp,
  Window,
} from "@mui/icons-material";
export const SidebarBtn = ({ name }) => {
  return (
    <div className=" hover:bg-[#5C5F6A] hover:text-black hover:bg-opacity-10 w-44 indent-2 py-2 rounded text-[#5C5F6A] text-start text-nowrap flex flex-row items-center gap-1 cursor-pointer text-[0.85rem]">
      {name === "Profile" && <AccountBox />}
      {name === "Add New Product" && <Inventory2 />}
      {name === "Recieved Requests" && <Outbox />}
      {name === "Sent Requests" && <GetApp />}
      {name === "Home" && <Window />}
      {name}
    </div>
  );
};
SidebarBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SidebarBtn;
