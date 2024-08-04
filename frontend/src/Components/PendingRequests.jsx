import PendingRequest from "./PendingRequest";
export const PendingRequests = () => {
  return (
    <div className="py-9 sm:mx-10 mx-5 flex flex-col justify-center gap-10">
      <h1 className="font-semibold text-[1.7rem]">List of Pending Requests</h1>
      <div className="flex flex-col gap-4">
        <li className="flex flex-row justify-between mx-3 bg-[#a9a4a4] px-4 py-[0.5rem] rounded">
          <div className="w-[34%] flex justify-center">
            <span>Product</span>
          </div>
          <div className="w-[33%] flex justify-center">
            <span>Price</span>
          </div>
          <div className="w-[33%] flex justify-center"></div>
        </li>
        <ul className="flex flex-col gap-3">
          <PendingRequest />
          <PendingRequest />
          <PendingRequest />
        </ul>
      </div>
    </div>
  );
};
export default PendingRequests;
