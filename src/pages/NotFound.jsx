import {Stack} from "@mui/material";
import NotFoundError from "../assets/404_error.svg?react";

export const NotFoundErrorPage = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="80vh"
      spacing={2}
      width="100vw"
    >
      <NotFoundError height="50vh" />
    </Stack>
  );
};
