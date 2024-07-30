import PropTypes from "prop-types";
import { useErrorFinder } from "../Redux/Hooks/useErrorFilder";
import { FirstLetterCapitalConvertor } from "../Redux/Hooks/useFirstLetterCapital";
export const AddProductInputField = ({ register, errors, name }) => {
  const [error, errorStatus] = useErrorFinder(name, errors);
  const [Heading] = FirstLetterCapitalConvertor(name);
  return (
    <div className="flex flex-col gap-[0.1rem]">
      <label htmlFor={name} className="text-[#47484f] text-[0.9rem]">
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
        className="outline-none py-2 indent-1 rounded border-[#7b8089] border-[0.1rem] text-[0.8rem] "
        spellCheck="disable"
        autoComplete="off"
        placeholder={error}
      />
    </div>
  );
};
AddProductInputField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};
export default AddProductInputField;
