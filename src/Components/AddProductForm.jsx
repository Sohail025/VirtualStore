import { useForm } from "react-hook-form";
import AddProductInputField from "./AddProductInputField";
import { firstPartInputs, secondPartInputs } from "../Redux/Variables";
export const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row ">
        <div className="flex flex-col gap-2 w-[50%] mx-8">
          {firstPartInputs?.map((item) => (
            <AddProductInputField
              register={register}
              errors={errors}
              name={item}
              key={item}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 w-[50%] h-auto mx-8">
          {secondPartInputs?.map((item) => (
            <AddProductInputField
              register={register}
              errors={errors}
              name={item}
              key={item}
            />
          ))}
          <div className="flex flex-col gap-2">
            <p>Images</p>
            <div className="py-4 rounded h-4 border-black border-2 flex flex-row items-center ">
              <span className="mx-3 cursor-pointer"> Choose Product Image</span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mx-8 my-2 bg-black px-2 py-1 font-semibold rounded text-white"
      >
        Submit
      </button>
    </form>
  );
};
export default AddProductForm;
