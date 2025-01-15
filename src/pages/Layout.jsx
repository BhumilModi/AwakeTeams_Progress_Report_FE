import {Stack} from "@mui/material";
import {useEffect} from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Header} from "../components/Header";
import {Sidebar} from "../components/Sidebar";
import {REPORT_DATA} from "../constants/dummyReport";

export const Layout = () => {
  const {id} = useParams();
  const nav = useNavigate();

  const userName = REPORT_DATA.find(
    (report) => report.session_info.user_id === id
  )?.session_info?.user_name;

  useEffect(() => {
    if (!userName) {
      nav("/");
    }
  }, [nav, userName]);

  return (
    userName && (
      <Stack width="100vw" height="100vh" alignItems="center">
        <Header userName={userName} />
        <Stack direction="row" width="100%">
          <Sidebar />
          <Outlet />
        </Stack>
      </Stack>
    )
  );
};
