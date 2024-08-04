import { Chat } from "@mui/icons-material";

export const ReceivedRequest = () => {
  return (
    <li className="flex flex-row justify-between mx-3 bg-emerald-200 px-3 py-[0.5rem] rounded">
      <div className="flex flex-row justify-between w-[40%] gap-4 sm:gap-0">
        <span>@msohail</span>
        <span>BlackTShirt</span>
        <span>45$</span>
      </div>
      <div className="sm:w-[30%] md:w-[34%] lg:[20%] flex flex-row justify-between">
        <div className="bg-black w-5 h-5 rounded-[50%] sm:hidden">f</div>
        <div className="text-nowrap bg-black text-white px-[1rem] rounded text-center py-1 text-[0.7rem] cursor-pointer hidden sm:block">
          Accept Request
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </li>
  );
};
export default ReceivedRequest;
