import { ArrowDropDown } from "@mui/icons-material";
import ListProduct from "./ListProduct";
import { useSelector } from "react-redux";
export const ProductsContainer = () => {
  const { fakeData } = useSelector((state) => state.layoutSlice);
  return (
    <div className="mx-10 mt-8 font-[Inter] ">
      <div className="flex flex-row gap-1 items-center">
        <h1 className="lg:text-[1.5rem] text-[1.3rem] font-bold">
          Buy What you want
        </h1>
        <ArrowDropDown sx={{ fontSize: 40 }} />
      </div>
      <br></br>
      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5">
        {fakeData.map((item) => (
          <ListProduct item={item} key={item} />
        ))}
      </div>
    </div>
  );
};
export default ProductsContainer;
