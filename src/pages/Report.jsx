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
import {useEffect} from "react";
import {Line} from "react-chartjs-2";
import Markdown from "react-markdown";
import {useNavigate, useParams} from "react-router-dom";
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

export const Report = () => {
  const nav = useNavigate();

  const {teamid, id} = useParams();

  const INDIVIDUAL_GRAPHS = REPORT_DATA.graphs.slice(4);

  useEffect(() => {
    if (
      !(
        teamid === REPORT_DATA.session_info.team_id &&
        id === REPORT_DATA.session_info.user_id
      )
    ) {
      nav("/");
    }
  }, [id, nav, teamid]);

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
        <Markdown>{REPORT_DATA.user_analysis}</Markdown>
      </Stack>
      <Stack direction="row" flexWrap="wrap" width="100%">
        {INDIVIDUAL_GRAPHS.map((graph, idx) => {
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
                  datasets: Object.entries(graph.data.skill).map(
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
