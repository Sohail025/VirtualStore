import PropTypes from "prop-types";
import { errorMessages, placeHolder } from "../Redux/Variables/LayoutVariables";
import { MessageFinder } from "../Redux/Hooks/MessageFinder";
import { FirstLetterCapitalConvertor } from "../Redux/Hooks/useFirstLetterCapital";
export const AddProductInputField = ({ register, errors, name }) => {
  const [error, errorStatus] = MessageFinder(name, errors, errorMessages);
  const [placeholder] = MessageFinder(name, errors, placeHolder);
  const [Heading] = FirstLetterCapitalConvertor(name);
  return (
    <div className="flex flex-col gap-[0.1rem] w-full">
      <label htmlFor={name} className="text-[#47484f] text-[0.9rem]">
        {Heading}
        {errorStatus && (
          <span className="text-red-700 text-[0.7rem]"> /{error}</span>
        )}
      </label>
      {name === "description" ? (
        <textarea
          {...register(`${name}`, {
            required: {
              value: true,
              message: error,
            },
          })}
          className="outline-none rounded border-[#7b8089] border-[0.1rem] text-[0.8rem] w-full pb-[.6rem] pt-1 px-2 placeholder-align"
          spellCheck="disable"
          autoComplete="off"
          placeholder={placeholder}
          rows="4"
        />
      ) : (
        <input
          type={
            (name === "price" && "number") || (name === "quantity" && "number")
          }
          {...register(`${name}`, {
            required: {
              value: true,
              message: error,
            },
          })}
          className="outline-none indent-1 rounded border-[#7b8089] border-[0.1rem] text-[0.8rem] w-full py-2"
          spellCheck="disable"
          autoComplete="off"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
AddProductInputField.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};
export default AddProductInputField;
