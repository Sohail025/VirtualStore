import { headerOptions } from "../Redux/Variables/LayoutVariables";
import HeaderBtn from "./HeaderBtn";
export const HeaderBtns = () => {
  return (
    <div className="lg:flex flex-row items-center gap-1 font-[Inter] hidden lg:block">
      {headerOptions.map((item) => (
        <HeaderBtn name={item} key={item} />
      ))}
    </div>
  );
};
export default HeaderBtns;
