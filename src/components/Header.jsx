import {Stack, Typography} from "@mui/material";
import logo from "../assets/ATlogo_RGB.png";

export const Header = () => {
  return (
    <Stack
      direction="row"
      gap={4}
      height="9vh"
      px={8}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
      width="100%"
      bgcolor="#F5F5F5"
    >
      <Stack direction="row" gap={4} alignItems="center">
        <img width="8%" src={logo} alt="Awake Teams logo" />
        <Typography variant="h1" color="#3434FF">
          Progress Report
        </Typography>
      </Stack>
      <Typography variant="h2">Session 4</Typography>
    </Stack>
  );
};
