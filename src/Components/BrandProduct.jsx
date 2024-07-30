import { ArrowForward } from "@mui/icons-material";

export const BrandProduct = () => {
  return (
    <div className="bg-gradient-to-r from-[#dbe1db] to-[rgb(251,249,249)] mx-10 font-[Inter]">
      <div className="py-6 mx-[4rem] flex flex-row justify-between items-center">
        <div className="w-[48%] mx-8 gap-4 flex flex-col">
          <p className="text-[1.7rem] font-bold text-[#0E1422]">
            Best Deal of The Market
          </p>
          <p className="text-[#64666b] text-[0.8rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            nam cupiditate aperiam, illum hic modi.
          </p>
          <div className="bg-[#0E1422] py-[0.5rem] cursor-pointer text-white w-32 rounded text-[0.83rem] flex flex-row gap-2 justify-center">
            <span>CheckOut</span>
            <ArrowForward sx={{ fontSize: 20 }} />
          </div>
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
