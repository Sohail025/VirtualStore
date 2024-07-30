export const ProductHeader = () => {
  return (
    <div className="flex flex-row text-[0.7rem] gap-5">
      <div className="flex flex-row gap-2">
        <img src="star.svg" alt="" />
        <p className="bg-[#5C5F6A] text-[#48484f] bg-opacity-5 px-[0.5rem] py-[0.1rem] rounded-[1rem] font-semibold">
          4.2 -- 52 Reviews
        </p>
      </div>
      <p className="bg-[#5C5F6A] text-[#48484f] bg-opacity-5 px-[0.5rem] rounded font-semibold text-center">
        Daska
      </p>
    </div>
  );
};
export default ProductHeader;
