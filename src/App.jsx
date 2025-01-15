import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {NotFoundErrorPage} from "./pages/NotFound";
import {Report} from "./pages/Report";
import {TeamReport} from "./pages/TeamReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:teamid/:id" element={<Layout />}>
          <Route index element={<Report />} />
          <Route path="/:teamid/:id/team" element={<TeamReport />} />
        </Route>
        <Route path="*" element={<NotFoundErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
