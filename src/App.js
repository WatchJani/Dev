import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./layout/Layout";

import { News, Home, NewPost, Register, Login } from "./pages/index"

import ScrollToTop from "./helper/ScrollToTop";

import PostProvider from "./contexts/PostContext";

import UserProvider from "./contexts/UserContext";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:news" element={<PostProvider><News /></PostProvider>} />
              <Route path="/add" element={<NewPost />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes >
        </ScrollToTop>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
