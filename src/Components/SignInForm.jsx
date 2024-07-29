import { useForm } from "react-hook-form";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import LoginButton from "./LoginButton";
import BackupLoginButton from "./BackupLoginButton";
import ForgotBotton from "./ForgotBotton";
import { LoginStatusChanger } from "../Redux/Features/LoginSlice";
import { useDispatch } from "react-redux";
export const SignInForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginStatusChanger(0));
    reset();
  };
  const BackupHandler = () => {
    dispatch(LoginStatusChanger(2));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col border-black border-[.1rem] px-5 py-2 rounded-[.6rem] shadow-lg w-full md:ml-32"
    >
      <p className="text-[1.3rem] my-3 font-[Poppins]">Welcome !</p>
      <h1 className="text-[2rem] font-semibold font-[Poppins]">Sign in to</h1>
      <p className="text-[0.8rem] mb-8 mt-1 font-[Poppins]">
        Login to get Started
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <EmailField register={register} errors={errors} />
        </div>
        <div className="flex flex-col gap-1 font-[Poppins]">
          <PasswordField errors={errors} register={register} />
        </div>
      </div>
      <ForgotBotton />
      <LoginButton name={"Login"} />
      <BackupLoginButton BackupHandler={BackupHandler} status={"Login"} />
    </form>
  );
};
export default SignInForm;
