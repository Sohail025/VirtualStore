import ReceivedRequest from "../Components/ReceivedRequest";
import SideBar from "../Components/Sidebar";
export const ReceivedRequests = () => {
  return (
    <div className="w-screen flex flex-row">
      <SideBar />
      <div className="w-[81.55%] bg-[#f6f6f6] h-screen flex flex-col justify-center">
        <div className="mx-12 my-4 flex items-center">
          <h1 className="">Profile</h1>
        </div>
        <div className="flex justify-center h-full">
          <div className="bg-[#ffffff] w-full h-[95%] mx-12 shadow-lg ">
            <div className="py-9 mx-10 flex flex-col justify-center gap-10">
              <h1 className="font-semibold text-[1.7rem]">
                List of Recieved Requests
              </h1>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between mx-3 bg-[#a9a4a4] px-3 py-[0.5rem] rounded">
                  <div className="flex flex-row justify-between w-[40%]">
                    <span>UserName</span>
                    <span>Product</span>
                    <span>Price</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  <ReceivedRequest />
                  <ReceivedRequest />
                  <ReceivedRequest />
                  <ReceivedRequest />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReceivedRequests;
