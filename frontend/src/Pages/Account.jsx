import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
export const Account = () => {
  return (
    <div className="w-screen flex flex-row h-screen font-[Inter] font-medium text-[#333336]">
      <Sidebar />
      <div className="w-[81.55%] bg-[#37383b] bg-opacity-10 h-screen flex flex-col justify-center">
        <div className="mx-12 my-4 flex items-center">
          <h1 className="">Add New Product</h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="bg-[#ffffff] w-full h-[95%] mx-12 shadow-lg rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
