import SidebarBtn from "./SidebarBtn";
import { sidebarOptions } from "../Redux/Variables";
export const Sidebar = () => {
  return (
    <div className="w-[19.45%] bg-white h-screen flex flex-col gap-6">
      <div className="flex justify-center items-center my-8">
        <span className="w-40 h-auto flex justify-center items-center">
          <img src="Logomark.svg" alt="" />
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          {sidebarOptions.map((item) => (
            <SidebarBtn name={item} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
