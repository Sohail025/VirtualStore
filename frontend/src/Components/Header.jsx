import {
  NotificationsActiveOutlined,
  AccountBox,
  Menu,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderSearchForm from "./HeaderSearchForm";
import { Link } from "react-router-dom";
import HeaderBtns from "./HeaderBtns";
import HeaderLogo from "./HeaderLogo";
import { useDispatch } from "react-redux";
import { MobileBarStatusHandler } from "../Redux/Features/LayoutSlice";
import MobileSidebar from "./MobileSidebar";
export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const MenuHandler = () => {
    dispatch(MobileBarStatusHandler());
  };
  return (
    <>
      <header className="flex flex-row lg:justify-between py-5 lg:mx-36 mx-3 justify-between items-center">
        <div className="flex flex-row justify-center lg:gap-24 sm:gap-4">
          <span onClick={MenuHandler} className=" lg:hidden">
            <Menu sx={{ fontSize: !sm ? 40 : 30 }} />
          </span>
          <HeaderLogo />
          <HeaderBtns />
        </div>
        <HeaderSearchForm gclass={"sm:hidden"} />
        <div className="flex flex-row lg:gap-6 justify-center sm:gap-6 items-center">
          <HeaderSearchForm gclass={"hidden sm:block"} />
          <div className="flex flex-row lg:gap-4 gap-[1rem] items-center">
            <NotificationsActiveOutlined
              className="cursor-pointer"
              sx={{ fontSize: !lg ? 30 : 33 && !sm ? 37 : 33 }}
              style={{ color: "#2f323b" }}
            />
            <Link to={"/profile"}>
              <AccountBox
                className="cursor-pointer"
                sx={{ fontSize: !lg ? 30 : 33 && !sm ? 37 : 33, mb: lg && 0.2 }}
                style={{ color: "#2f323b" }}
              />
            </Link>
          </div>
        </div>
      </header>
      <MobileSidebar />
    </>
  );
};
export default Header;
