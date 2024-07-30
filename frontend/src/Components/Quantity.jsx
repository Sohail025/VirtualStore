export const Quantity = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Quantity</p>
      <div className="w-36 border-[#5C5F6A] border-2 rounded-[.5rem] flex flex-row justify-evenly items-center">
        <span>
          <img src="Minus.svg" alt="" />
        </span>
        <input type="number" className="w-8 outline-none" />
        <span>
          <img src="plus.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Quantity;
