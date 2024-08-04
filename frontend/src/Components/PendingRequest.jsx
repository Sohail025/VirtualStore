import { Cancel } from "@mui/icons-material";
export const PendingRequest = () => {
  return (
    <li className="flex flex-row mx-3 bg-emerald-200 px-4 py-[0.5rem] rounded">
      <div className="w-[34%] flex justify-center">
        <span>BlackTShirt</span>
      </div>
      <div className="w-[33%] flex justify-center">
        <span>45.00$</span>
      </div>
      <span className="sm:hidden w-[33%] flex justify-center">
        <Cancel />
      </span>
      <div className="hidden sm:block w-[33%] sm:flex justify-center items-center">
        <div className="text-nowrap bg-black w-[70%] text-white px-[1rem] rounded text-center py-1 text-[0.7rem] cursor-pointer hidden sm:block">
          Cancel Request
        </div>
      </div>
    </li>
  );
};

export default PendingRequest;
