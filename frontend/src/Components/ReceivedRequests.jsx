import ReceivedRequest from "./ReceivedRequest";
export const ReceivedRequests = () => {
  return (
    <div className="py-9 mx-10 flex flex-col justify-center gap-10">
      <h1 className="font-semibold text-[1.7rem]">List of Recieved Requests</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between mx-3 bg-[#a9a4a4] px-3 py-[0.5rem] rounded">
          <div className="flex flex-row justify-between w-[40%] gap-6 sm:gap-0">
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
  );
};
export default ReceivedRequests;
