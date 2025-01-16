import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {NotFoundErrorPage} from "./pages/NotFound";
import {Recap} from "./pages/Recap";
import {Report} from "./pages/Report";
import {SuggestModules} from "./pages/SuggestModules";
import {TeamReport} from "./pages/TeamReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:teamid/:id" element={<Layout />}>
          <Route index element={<Report />} />
          <Route path="/:teamid/:id/team" element={<TeamReport />} />
          <Route path="/:teamid/:id/suggest" element={<SuggestModules />} />
          <Route path="/:teamid/:id/recap" element={<Recap />} />
        </Route>
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
