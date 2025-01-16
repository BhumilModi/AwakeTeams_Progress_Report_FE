import {Stack, Typography} from "@mui/material";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {SIDEBAR_ITEMS} from "../constants/Sidebar";

export const Sidebar = () => {
  const {id, teamid} = useParams();
  const location = useLocation().pathname;
  const nav = useNavigate();

  return (
    <Stack
      width="15%"
      height="91vh"
      p={2}
      py={4}
      boxShadow="4px 4px 6px rgba(0, 0, 0, 0.2)"
      spacing={2}
      bgcolor="#F5F5F5"
    >
      {SIDEBAR_ITEMS.map((sidebarItem, idx) => {
        const redirect =
          "/" + teamid + "/" + id + "/" + sidebarItem.redirectUrl;

        return (
          <Stack
            key={idx}
            bgcolor={redirect === location && "#FFDD0026"}
            borderRadius="8px"
            px={2}
            py={1}
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.2)"
            onClick={() => nav(redirect)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="body1">{sidebarItem.name}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
