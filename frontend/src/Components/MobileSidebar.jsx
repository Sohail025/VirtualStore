import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { sidebarOptions } from "../Redux/Variables/LayoutVariables";
import MobileSidebarOption from "./MobileSidebarOption";
export const MobileSidebar = () => {
  const { MobileBarStatus } = useSelector((state) => state.layoutSlice);
  useEffect(() => {
    handleDrawerToggle();
  }, [MobileBarStatus]);
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Virtual Store
      </Typography>
      <Divider />
      <List className="flex flex-col gap-3">
        {sidebarOptions.map((item) => (
          <MobileSidebarOption item={item} key={item} />
        ))}
      </List>
    </Box>
  );
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};
MobileSidebar.propTypes = {
  window: PropTypes.func,
};
export default MobileSidebar;
