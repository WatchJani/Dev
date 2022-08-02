import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";

import { News, Home } from "./pages/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:news" element={<News />} />
          {/*<Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes >
    </BrowserRouter>

  );
}

export default App;
