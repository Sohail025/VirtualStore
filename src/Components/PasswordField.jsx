import PropTypes from "prop-types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export const PasswordField = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState();
  const hidePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <label className="font-semibold text-[0.9rem] " htmlFor="password">
        Password
        {errors.password && (
          <span className="text-red-700 text-[0.7rem]">{` /${errors?.password?.message}`}</span>
        )}
      </label>
      <div className="py-[0.7rem] outline-none border-[#787878] border-[0.1rem] rounded  text-[0.8rem] flex flex-row justify-between items-center">
        <input
          type={showPassword ? "text" : "password"}
          className="outline-none indent-2 w-[90%]"
          placeholder="Enter your Password "
          {...register("password", {
            required: {
              value: true,
              message: "Enter your password",
            },
          })}
          autoComplete="off"
          spellCheck="disable"
        />
        <span className="w-[10%] cursor-pointer">
          {showPassword ? (
            <VisibilityIcon onClick={hidePassword} />
          ) : (
            <VisibilityOffIcon onClick={hidePassword} />
          )}
        </span>
      </div>
    </div>
  );
};
PasswordField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    password: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
};
export default PasswordField;
