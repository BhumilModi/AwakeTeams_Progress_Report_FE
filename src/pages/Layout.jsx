import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";

export const Layout = () => {
  return (
    <Stack width="100vw" height="100vh" alignItems="center">
      <Header />
      <Stack direction="row">
        <Sidebar />
        <Outlet />
      </Stack>
    </Stack>
  );
};
