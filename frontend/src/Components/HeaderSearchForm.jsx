export const HeaderSearchForm = () => {
  return (
    <form className="flex flex-row items-center gap-3 justify-center">
      <div className="flex flex-row justify-between px-2 py-[0.3rem] rounded gap-2 w-64 border-[0.1rem] border-[#878A92] text-[0.86rem]">
        <span className="cursor-pointer flex justify-center items-center">
          <img src="Search.svg" alt="" />
        </span>
        <input className="outline-none w-full" placeholder="Search products" />
      </div>
    </form>
  );
};
export default HeaderSearchForm;
