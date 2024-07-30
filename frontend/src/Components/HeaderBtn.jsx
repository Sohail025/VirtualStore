import { Email, ArrowDropDown, Inventory2 } from "@mui/icons-material";
import PropTypes from "prop-types";
export const HeaderBtn = ({ name }) => {
  return (
    <div className="hover:bg-[#87878b] hover:text-black hover:bg-opacity-5 cursor-pointer px-2 py-1 rounded text-[0.84rem] flex flex-row items-center justify-center gap-[0.14rem]">
      <span>
        {name === "Category" && <ArrowDropDown sx={{ fontSize: 20 }} />}
      </span>
      {name}
    </div>
  );
};
HeaderBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default HeaderBtn;
