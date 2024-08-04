export const HeaderLogo = () => {
  return (
    <div className="lg:flex sm:block sm:flex flex-row items-center lg:gap-3 gap-[0.4rem] sm:gap-2 hidden lg:block">
      <span className="w-5 sm:w-7 h-auto lg:w-auto lg:h-auto">
        <img src="Logomark.svg" alt="" />
      </span>

      <span className="font-[Manrope] text-[0.8rem] sm:text-[1.1rem] lg:text-[1rem] text-nowrap">
        Virtual Store
      </span>
    </div>
  );
};
export default HeaderLogo;
