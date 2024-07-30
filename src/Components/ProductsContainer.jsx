import { ArrowDropDown } from "@mui/icons-material";
import ListProduct from "./ListProduct";
export const ProductsContainer = () => {
  return (
    <div className="mx-10 mt-8 font-[Inter] ">
      <div className="flex flex-row gap-1 items-center">
        <h1 className="text-[1.5rem] font-bold">Buy What you want</h1>
        <ArrowDropDown sx={{ fontSize: 40 }} />
      </div>

      <br></br>
      <div className="grid grid-cols-4 gap-5">
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
      </div>
    </div>
  );
};
export default ProductsContainer;
