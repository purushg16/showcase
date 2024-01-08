import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/layout";

const Layout = () => {
  return (
    <>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
