import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AccountBox,
  Inventory2,
  Outbox,
  GetApp,
  Window,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export const SidebarBtn = ({ name }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));

  const profile = name === "Profile";
  const addproduct = name === "Add New Product";
  const rRequests = name === "Recieved Requests";
  const pRequests = name === "Pending Requests";
  const home = name === "Home";
  return (
    <Link
      to={
        (profile && "/profile") ||
        (addproduct && "/addproduct") ||
        (rRequests && "/receivedrequests") ||
        (pRequests && "/pendingrequests") ||
        (home && "/home")
      }
    >
      <div className=" hover:bg-[#5C5F6A] hover:text-black hover:bg-opacity-10 lg:w-44 md:w-32 indent-2 py-2 rounded text-[#5C5F6A] text-start text-nowrap flex flex-row items-center gap-1 md:gap-0 cursor-pointer lg:text-[0.85rem] md:text-[.6rem]">
        {profile && <AccountBox sx={{ fontSize: md && 20 }} />}
        {addproduct && <Inventory2 sx={{ fontSize: md && 20 }} />}
        {rRequests && <Outbox sx={{ fontSize: md && 20 }} />}
        {pRequests && <GetApp sx={{ fontSize: (lg && 20) || (md && 30) }} />}
        {home && <Window sx={{ fontSize: md && 20 }} />}
        {name}
      </div>
    </Link>
  );
};
SidebarBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SidebarBtn;
