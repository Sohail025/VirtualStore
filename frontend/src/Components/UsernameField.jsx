import PropTypes from "prop-types";
export const UsernameField = ({ register, errors }) => {
  return (
    <div>
      <label className="font-semibold text-[0.9rem] " htmlFor="username">
        Username
        {errors.username && (
          <span className="text-red-700 text-[0.7rem]">{` /${errors?.username?.message}`}</span>
        )}
      </label>
      <input
        className=" indent-2 w-full py-[0.7rem] outline-none border-[#787878] border-[0.1rem] rounded  text-[0.8rem] flex flex-row justify-between"
        placeholder="Enter your Username "
        {...register("username", {
          required: {
            value: true,
            message: "Enter Your username",
          },
        })}
        autoComplete="off"
        spellCheck="disable"
      />
    </div>
  );
};
UsernameField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    username: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
};
export default UsernameField;
