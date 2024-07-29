import { useSelector } from "react-redux";
// import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";
import SignInForm from "../Components/SignInForm";
import GoogleLoginForm from "../Components/GoogleLoginForm";
export const Login = () => {
  const { status } = useSelector((state) => state.loginSlice);
  return (
    <div className="flex flex-col min-h-screen font-[Poppins, sans]">
      <header className="mx-3 mt-1">Your Logo</header>
      <div className="flex flex-row justify-center flex-grow h-full w-full items-center">
        <section className="w-full mx-8 flex justify-center items-center sm:mx-20 md:mx-0 md:w-[50%]">
          {status === 0 && <GoogleLoginForm />}
          {status === 1 && <SignInForm />}
          {status === 2 && <SignUpForm />}
        </section>
        <section className="w-[50%] hidden md:block">
          <img
            className="w-full h-auto"
            src="discussion.svg"
            alt="Discussion Photo"
          />
        </section>
      </div>
    </div>
  );
};
export default Login;
