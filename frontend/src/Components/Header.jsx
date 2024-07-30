import { NotificationsActiveOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
export const Header = () => {
  return (
    <header className="flex flex-row justify-between py-5 mx-36">
      <div className="flex flex-row justify-center gap-24">
        <div className="flex flex-row items-center gap-3">
          <span>
            <img src="Logomark.svg" alt="" />
          </span>
          <span>Virtual Store</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button>Home</button>
          <button>Catagaries</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="flex flex-row gap-6 justify-center">
        <form className="flex flex-row items-center gap-3 justify-center">
          <div className="flex flex-row justify-between px-2 py-[0.4rem] rounded gap-2 w-64 border-[0.1rem] border-[#878A92]">
            <span className="cursor-pointer flex justify-center items-center">
              <img src="Search.svg" alt="" />
            </span>
            <input
              className="outline-none w-full"
              placeholder="Search products"
            />
          </div>
        </form>
        <div className="flex flex-row gap-3 items-center">
          <NotificationsActiveOutlined />
          <span>
            <img src="Account.svg" alt="" />
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
