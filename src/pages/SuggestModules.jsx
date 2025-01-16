import {Stack} from "@mui/material";
import Markdown from "react-markdown";
import {useParams} from "react-router-dom";
import {REPORT_DATA} from "../constants/dummyReport";

export const SuggestModules = () => {
  const {id} = useParams();

  const report = REPORT_DATA.find(
    (report) => report.session_info.user_id === id
  );

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
      <Stack spacing={3} width="80%">
        <Markdown>{report?.next_module_recommendation}</Markdown>
      </Stack>
    </Stack>
  );
};
