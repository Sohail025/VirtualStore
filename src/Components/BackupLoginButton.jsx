import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const loginOb = {
  text: "Already have am Account ? ",
  value: "Login",
};
const registerOb = {
  text: "Don't Have an Account ? ",
  value: "Register",
};
const backup = "Login without An account";
export const BackupLoginButton = ({ status, BackupHandler }) => {
  const Register = Boolean(status === "Register");
  const Login = Boolean(status === "Login");
  const defaultLogin = Boolean(status === "Google");
  return (
    <div className="flex justify-center items-center font-[Poppins]">
      <p className="text-[0.8rem] my-2">
        {Register && loginOb.text}
        {Login && registerOb.text}
        <Link to={defaultLogin && "/home"}>
          <span
            onClick={BackupHandler}
            className={`font-bold ${
              defaultLogin && "cursor-default"
            } cursor-pointer`}
          >
            {Register && loginOb.value}
            {Login && registerOb.value}
            {defaultLogin && backup}
          </span>
        </Link>
      </p>
    </div>
  );
};
BackupLoginButton.propTypes = {
  status: PropTypes.string.isRequired,
  BackupHandler: PropTypes.func.isRequired,
};
export default BackupLoginButton;
