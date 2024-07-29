import PropTypes from "prop-types";
import { useErrorFinder } from "../Redux/Hooks/useErrorFilder";
import { FirstLetterCapitalConvertor } from "../Redux/Hooks/useFirstLetterCapital";
export const AddProductInputField = ({ register, errors, name }) => {
  const [error, errorStatus] = useErrorFinder(name, errors);
  const [Heading] = FirstLetterCapitalConvertor(name);
  return (
    <>
      <label htmlFor={name}>
        {Heading}
        {errorStatus && (
          <span className="text-red-700 text-[0.7rem]"> /{error}</span>
        )}
      </label>
      <input
        type={name === "price" && "number"}
        {...register(`${name}`, {
          required: {
            value: true,
            message: error,
          },
        })}
        className="outline-none py-2 indent-1 rounded border-black border-2 text-[0.8rem] "
        spellCheck="disable"
        autoComplete="off"
        placeholder={error}
      />
    </>
  );
};
AddProductInputField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};
export default AddProductInputField;
