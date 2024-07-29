export const ListProduct = () => {
  return (
    <div className="bg-[#a7a4a4] h-44">
      <div className="h-[80%] flex justify-center items-center">
        <span className="w-40 h-24 flex justify-center items-center">
          <img src="/Shirts/cover 1.svg" alt="" />
        </span>
      </div>
      <div className="bg-[#b87171] h-[20%]">
        <div className="flex flex-row justify-between mx-4 h-full items-center">
          <span className="">Price : 40$</span>
          <button>Open</button>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
