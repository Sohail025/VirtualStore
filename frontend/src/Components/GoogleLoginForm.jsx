import BackupLoginButton from "./BackupLoginButton";
import { LoginStatusChanger } from "../Redux/Features/LoginSlice";
import { useDispatch } from "react-redux";
export const GoogleLoginForm = () => {
  const dispatch = useDispatch();
  const EmailLoginHandler = () => {
    dispatch(LoginStatusChanger(2));
  };
  return (
    <form className="flex flex-col border-black border-[.1rem] px-5 py-2 rounded-[.6rem] shadow-lg w-full md:ml-32">
      <p className="text-[1.3rem] my-3 font-[Poppins]">Welcome !</p>
      <h1 className="text-[2rem] font-semibold font-[Poppins]">Sign in With</h1>
      <p className="text-[0.8rem] mb-8 mt-1 font-[Poppins]">
        Login to get Started
      </p>
      <div className="flex flex-col justify-center gap-4 my-8 items-center">
        <div className="bg-black w-[90%] text-white rounded cursor-pointer py-2 text-center">
          Continue with Google
        </div>
        <div
          onClick={EmailLoginHandler}
          className="bg-black w-[90%] text-white rounded cursor-pointer py-2 text-center"
        >
          Continue with Email
        </div>
      </div>

      <BackupLoginButton status={"Google"} />
    </form>
  );
};
export default GoogleLoginForm;
