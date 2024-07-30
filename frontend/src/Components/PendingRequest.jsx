export const PendingRequest = () => {
  return (
    <li className="flex flex-row justify-between mx-3 bg-emerald-200 px-3 py-[0.5rem] rounded">
      <div className="flex flex-row justify-between w-[40%]">
        <span>BlackTShirt</span>
        <span>45$</span>
      </div>
      <div className="w-[15%] flex flex-row justify-between">
        <div className="text-nowrap bg-black text-white px-[1rem] rounded text-center py-1 text-[0.7rem] cursor-pointer">
          Cancel Request
        </div>
      </div>
    </li>
  );
};
export default PendingRequest;
