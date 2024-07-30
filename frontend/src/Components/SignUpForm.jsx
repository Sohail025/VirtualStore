import { useForm } from "react-hook-form";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";
import LoginButton from "./LoginButton";
import BackupLoginButton from "./BackupLoginButton";
import { UsernameField } from "./UsernameField";
import { LoginStatusChanger } from "../Redux/Features/LoginSlice";
import { useDispatch } from "react-redux";
export const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginStatusChanger(1));
    reset();
  };
  const BackupHandler = () => {
    dispatch(LoginStatusChanger(1));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col border-black border-[.1rem] px-5 py-2 rounded-[.6rem] shadow-lg w-full md:ml-32"
    >
      <p className="text-[1.3rem] my-1 font-[Poppins]">Welcome !</p>
      <h1 className="text-[2rem] font-semibold font-[Poppins]">Sign up to</h1>
      <p className="text-[0.8rem] mb-3 mt-1 font-[Poppins]">
        Create Account to get Start
      </p>
      <div className="flex flex-col gap-5 font-[Poppins]">
        <div className="flex flex-col gap-2">
          <UsernameField errors={errors} register={register} />
          <EmailField register={register} errors={errors} />
          <PasswordField errors={errors} register={register} />
        </div>
      </div>
      <LoginButton onsubmit={onsubmit} name={"Register"} />
      <BackupLoginButton BackupHandler={BackupHandler} status={"Register"} />
    </form>
  );
};
export default SignUpForm;
