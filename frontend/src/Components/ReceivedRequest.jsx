export const ReceivedRequest = () => {
  return (
    <li className="flex flex-row justify-between mx-3 bg-emerald-200 px-3 py-[0.5rem] rounded">
      <div className="flex flex-row justify-between w-[40%]">
        <span>@msohail</span>
        <span>BlackTShirt</span>
        <span>45$</span>
      </div>
      <div className="w-[20%] flex flex-row justify-between">
        <div className="text-nowrap bg-black text-white px-[1rem] rounded text-center py-1 text-[0.7rem] cursor-pointer">
          Accept Request
        </div>
        <div>Chat</div>
      </div>
    </li>
  );
};
export default ReceivedRequest;
