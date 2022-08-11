import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";

import { News, Home } from "./pages/index"

import ScrollToTop from "./helper/ScrollToTop";

import PostProvider from "./contexts/PostContext";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:news" element={<PostProvider><News /></PostProvider>} />
            {/*<Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
          </Route>
        </Routes >
      </ScrollToTop>
    </BrowserRouter>

  );
}

export default App;
