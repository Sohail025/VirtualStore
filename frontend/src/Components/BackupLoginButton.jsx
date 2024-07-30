import PropTypes from "prop-types";
const loginOb = {
  text: "Already have am Account ? ",
  value: "Login",
};
const registerOb = {
  text: "Don't Have an Account ? ",
  value: "Register",
};
const google = "Login with Google quickly";
export const BackupLoginButton = ({ status, BackupHandler }) => {
  return (
    <div className="flex justify-center items-center font-[Poppins]">
      <p className="text-[0.8rem] my-2">
        {status === "Register" && loginOb.text}
        {status === "Login" && registerOb.text}

        <span
          onClick={BackupHandler}
          className={`font-bold ${
            status === "Google" && "cursor-default"
          } cursor-pointer`}
        >
          {status === "Register" && loginOb.value}
          {status === "Login" && registerOb.value}
          {status === "Google" && google}
        </span>
      </p>
    </div>
  );
};
BackupLoginButton.propTypes = {
  status: PropTypes.string.isRequired,
  BackupHandler: PropTypes.func.isRequired,
};
export default BackupLoginButton;
