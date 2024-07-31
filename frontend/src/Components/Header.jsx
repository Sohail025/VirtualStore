import {
  NotificationsActiveOutlined,
  AccountBox,
  Menu,
} from "@mui/icons-material";
import HeaderSearchForm from "./HeaderSearchForm";
import { Link } from "react-router-dom";
import HeaderBtns from "./HeaderBtns";
export const Header = () => {
  return (
    <header className="flex flex-row justify-between py-5 lg:mx-36">
      <div className="flex flex-row justify-center lg:gap-24">
        <div className="flex flex-row items-center gap-3">
          <span className=" lg:hidden">
            <Menu />
          </span>
          <span className="w-8 h-auto lg:w-auto lg:h-auto">
            <img src="Logomark.svg" alt="" />
          </span>

          <span className="font-[Manrope] text-[0.8rem] lg:text-[1rem] text-nowrap">
            Virtual Store
          </span>
        </div>
        <HeaderBtns />
      </div>
      <div className="flex flex-row gap-6 justify-center">
        <HeaderSearchForm />
        <div className="flex flex-row gap-4 items-center">
          <NotificationsActiveOutlined
            className="cursor-pointer"
            sx={{ fontSize: 30 }}
            style={{ color: "#2f323b" }}
          />
          <Link to={"/account/profile"}>
            <AccountBox
              className="cursor-pointer"
              sx={{ fontSize: 30 }}
              style={{ color: "#2f323b" }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
