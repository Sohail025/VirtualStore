import PropTypes from "prop-types";
export const EmailField = ({ register, errors }) => {
  return (
    <>
      <label
        className="font-semibold text-[0.9rem] font-[Poppins]"
        htmlFor="Email"
      >
        Email
        {errors.email && (
          <span className="text-red-700 text-[0.7rem]">{` /${errors?.email?.message}`}</span>
        )}
      </label>
      <input
        className="py-[0.7rem] outline-none border-[#787878] border-[0.1rem] rounded indent-2 text-[0.8rem] font-[Poppins]"
        placeholder="Enter your email"
        {...register("email", {
          required: {
            value: true,
            message: "Enter your email",
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid Email",
          },
        })}
        spellCheck="disable"
        autoComplete="off"
      />
    </>
  );
};
EmailField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.shape({
      message: PropTypes.string,
    }),
  }).isRequired,
};
export default EmailField;
