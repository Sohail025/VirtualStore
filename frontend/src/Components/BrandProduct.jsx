import { Button } from "@mui/material";

export const BrandProduct = () => {
  return (
    <div className="bg-gradient-to-r from-[#dbe1db] to-[rgb(251,249,249)] mx-10">
      <div className="py-6 mx-[4rem] flex flex-row justify-between items-center">
        <div className="w-[48%] mx-8 gap-4 flex flex-col">
          <p className="text-[1.7rem] font-semibold">Best Deal of The Market</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            nam cupiditate aperiam, illum hic modi.
          </p>
          <Button sx={{ width: 240 }} variant="contained">
            Try Now
          </Button>
        </div>
        <div>
          <div className="w-44 h-40 flex justify-center items-center ">
            <img
              className="object-cover w-96 h-40"
              src="BrandShirt.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandProduct;
