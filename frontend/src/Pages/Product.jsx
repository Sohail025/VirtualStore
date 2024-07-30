import Header from "../Components/Header";
import ProductDetails from "../Components/ProductDetails";
import ProductHeader from "../Components/ProductHeader";
import ProductImage from "../Components/ProductImage";
import Quantity from "../Components/Quantity";
import SendRequestBtn from "../Components/SendRequestBtn";
import YourRate from "../Components/YourRate";
export const Product = () => {
  return (
    <div>
      <Header />
      <div className="mx-36 flex flex-col">
        <p className="my-2">@sohail {">"} Black T-Shirt</p>
        <div className="flex flex-row">
          <ProductImage />
          <div className="w-[50%] ml-10 flex flex-col gap-[1.1rem]">
            <div className="flex flex-col gap-[0.26rem]">
              <h1 className="text-[1.7rem] font-semibold">Black T-Shirt</h1>
              <ProductHeader />
            </div>
            <p className="font-semibold text-[1.6rem]">$45.00</p>
            <div className="flex flex-col gap-2">
              <Quantity />
              <YourRate />
            </div>
            <SendRequestBtn />
          </div>
        </div>
        <ProductDetails />
      </div>
    </div>
  );
};
export default Product;
