export const ListProduct = () => {
  return (
    <div className="h-64 flex flex-col gap-4">
      <div className="bg-[#5C5F6A] bg-opacity-10 h-[70%] flex justify-center items-center rounded">
        <span className="w-40 h-24 flex justify-center items-center">
          <img src="/Shirts/cover 1.svg" alt="" />
        </span>
      </div>
      <div className=" h-[30%]">
        <div className="flex flex-col h-full gap-1">
          <p className="text-[0.8rem] font-medium">Black Tshirt</p>
          <div className="flex flex-row gap-4 items-center">
            <button className="text-[.6rem] px-[0.8rem] py-[0.17rem] border-[#8c8d91] border-[0.08rem] rounded-[1rem]">
              DASKA
            </button>
            <span className="text-[.9rem] font-semibold text-[#5C5F6A]">
              40.00$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
