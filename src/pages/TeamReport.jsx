import {Stack} from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";
import Markdown from "react-markdown";
import {useParams} from "react-router-dom";
import {REPORT_DATA} from "../constants/dummyReport";
import {PlotColors} from "../styles/PlotColors";

// Register chart.js modules
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Filler,
  CategoryScale,
  Legend
);

export const TeamReport = () => {
  const {id} = useParams();

  const report = REPORT_DATA.find(
    (report) => report.session_info.user_id === id
  );

  const TEAM_GRAPHS = report?.graphs.slice(0, 4);

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
        <Markdown>{report?.team_analysis}</Markdown>
      </Stack>
      <Stack direction="row" flexWrap="wrap" width="100%">
        {TEAM_GRAPHS?.map((graph, idx) => {
          return (
            <Stack key={idx} width="50%" p={3}>
              <Line
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: graph.name,
                    },
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Months",
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Scores",
                      },
                    },
                  },
                }}
                data={{
                  labels: ["Month1", "Month2", "Month3", "Month4"],
                  datasets: Object.entries(graph.data).map(
                    ([key, value], idx) => {
                      return {
                        label: key,
                        data: value,
                        borderColor: PlotColors[idx].borderColor,
                        backgroundColor: PlotColors[idx].backgroundColor,
                      };
                    }
                  ),
                }}
              />
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
