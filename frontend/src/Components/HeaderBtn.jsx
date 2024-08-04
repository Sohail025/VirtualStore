import { Email, ArrowDropDown, Inventory2 } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const HeaderBtn = ({ name }) => {
  const addnewProduct = name === "Add New Product";
  return (
    <Link to={addnewProduct && "/addproduct"}>
      <div className="hover:bg-[#87878b] hover:text-black hover:bg-opacity-5 cursor-pointer px-2 py-1 rounded text-[0.84rem] flex-row items-center justify-center gap-[0.14rem] text-nowrap">
        <span>
          {name === "Category" && <ArrowDropDown sx={{ fontSize: 20 }} />}
        </span>
        {name}
      </div>
    </Link>
  );
};
HeaderBtn.propTypes = {
  name: PropTypes.string.isRequired,
};
export default HeaderBtn;
