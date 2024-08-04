import { useForm } from "react-hook-form";
import { CloudUpload } from "@mui/icons-material";
import AddProductInputField from "./AddProductInputField";
import {
  firstPartInputs,
  secondPartInputs,
} from "../Redux/Variables/LayoutVariables";
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
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0">
        <div className="flex flex-col gap-4 lg:w-[50%] mx-8">
          {firstPartInputs?.map((item) => (
            <AddProductInputField
              register={register}
              errors={errors}
              name={item}
              key={item}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 lg:w-[50%] h-auto mx-8">
          {secondPartInputs?.map((item) => (
            <AddProductInputField
              register={register}
              errors={errors}
              name={item}
              key={item}
            />
          ))}
          <div className="flex flex-col gap-1">
            <p className="text-[#47484f] text-[0.9rem]">Images</p>
            <div className="py-3 rounded flex flex-row pl-3 items-center border-[#7b8089] border-[0.1rem] cursor-pointer">
              <CloudUpload sx={{ fontSize: 30 }} />
              <span className="mx-3 text-[#797a80] text-[0.85rem]">
                Uplaod Product Images
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mx-8 my-4 bg-black px-3 py-1 font-semibold rounded text-white"
      >
        Submit
      </button>
    </form>
  );
};
export default AddProductForm;
