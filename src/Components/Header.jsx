import { NotificationsActiveOutlined, AccountBox } from "@mui/icons-material";
import { headerOptions } from "../Redux/Variables";
import HeaderBtn from "./HeaderBtn";
import HeaderSearchForm from "./HeaderSearchForm";
export const Header = () => {
  return (
    <header className="flex flex-row justify-between py-5 mx-36">
      <div className="flex flex-row justify-center gap-24">
        <div className="flex flex-row items-center gap-3">
          <span>
            <img src="Logomark.svg" alt="" />
          </span>
          <span className="font-[Manrope]">Virtual Store</span>
        </div>
        <div className="flex flex-row items-center gap-1 font-[Inter]">
          {headerOptions.map((item) => (
            <HeaderBtn name={item} key={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-6 justify-center">
        <HeaderSearchForm />
        <div className="flex flex-row gap-4 items-center">
          <NotificationsActiveOutlined
            className="cursor-pointer"
            sx={{ fontSize: 30 }}
            style={{ color: "#2f323b" }}
          />
          <AccountBox
            className="cursor-pointer"
            sx={{ fontSize: 30 }}
            style={{ color: "#2f323b" }}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
