import {Stack} from "@mui/material";

export const SuggestModules = () => {
  return (
    <Stack
      width="85%"
      p={3}
      height="90vh"
      overflow="auto"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      spacing={10}
      alignItems="center"
    >
      Suggested Modules
    </Stack>
  );
};
