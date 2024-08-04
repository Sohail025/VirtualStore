import PropTypes from "prop-types";
export const HeaderSearchForm = ({ gclass }) => {
  return (
    <form
      className={`flex flex-row items-center lg:gap-3 gap-1 justify-center ${gclass}`}
    >
      <div className="flex flex-row justify-between px-2 lg:py-[0.3rem] py-[.22rem] sm:py-[.32rem] rounded gap-2 lg:w-64 w-48 sm:w-56 border-[0.1rem] border-[#878A92] lg:text-[0.86rem] text-[0.7rem] sm:text-[0.9rem] items-center">
        <span className="cursor-pointer flex justify-center items-center">
          <img src="Search.svg" alt="" />
        </span>
        <input className="outline-none w-full" placeholder="Search products" />
      </div>
    </form>
  );
};
HeaderSearchForm.propTypes = {
  gclass: PropTypes.string.isRequired,
};
export default HeaderSearchForm;
