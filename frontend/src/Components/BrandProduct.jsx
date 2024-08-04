import { ArrowForward } from "@mui/icons-material";

export const BrandProduct = () => {
  return (
    <div className="bg-gradient-to-r from-[#dbe1db] to-[rgb(251,249,249)] lg:mx-10 mx-4 font-[Inter] mt-5">
      <div className="py-6 lg:mx-[4rem] mx-5 flex flex-row justify-between items-center">
        <div className="w-[70%] lg:w-[48%]  lg:mx-8 gap-4 flex flex-col">
          <p className="lg:text-[1.7rem] text-[1rem] font-bold text-[#0E1422] text-nowrap">
            Best Deal of The Market
          </p>
          <p className="text-[#64666b] lg:text-[0.8rem] text-[0.7rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            nam cupiditate aperiam, illum hic modi.
          </p>
          <div className="bg-[#0E1422] py-[0.5rem] cursor-pointer text-white w-32 rounded text-[0.83rem] flex flex-row gap-2 justify-center">
            <span>CheckOut</span>
            <ArrowForward sx={{ fontSize: 20 }} />
          </div>
        </div>
        <div>
          <div className="lg:w-44 w-[9rem] lg:h-40 h-[10rem] ml-[1.5rem] lg:ml-0 flex lg:justify-center lg:items-center ">
            <img
              className="object-cover w-96 h-auto"
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
