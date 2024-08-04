import { Menu } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import useCurrentRoute from "../Redux/Hooks/useCurrentRoute";
import { MobileBarStatusHandler } from "../Redux/Features/LayoutSlice";
import MobileSidebar from "../Components/MobileSidebar";
export const Account = () => {
  const SidebarHandler = () => {
    dispatch(MobileBarStatusHandler());
  };
  const dispatch = useDispatch();
  const [Header] = useCurrentRoute();
  const addproductCheck = Header === "Addproduct";
  const recivedRequestCheck = Header === "Receivedrequests";
  const pendingRequestCheck = Header === "Pendingrequests";
  return (
    <>
      <div className="w-screen flex flex-row h-screen font-[Inter] font-medium text-[#333336] bg-[#37383b] lg:bg-white bg-opacity-10 justify-center sm:justify-normal">
        <Sidebar />
        <div className="lg:w-[8] w-full lg:bg-[#37383b] lg:bg-opacity-10 h-screen flex flex-col justify-center">
          <div className="lg:mx-12 mx-4 my-4 flex items-center gap-3">
            <span onClick={SidebarHandler} className="md:hidden">
              <Menu />
            </span>
            <h1 className=" lg:mx-0">
              {addproductCheck
                ? "Add Product"
                : pendingRequestCheck
                ? "Pending Requests"
                : recivedRequestCheck
                ? "Received Requests"
                : Header}
            </h1>
          </div>
          <div className="flex justify-center h-full">
            <div className="bg-[#ffffff] w-full h-[98%] lg:h-[95%] lg:mx-12 mx-4 shadow-lg rounded">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar />
    </>
  );
};
export default Account;
