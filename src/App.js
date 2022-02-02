import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Ask from "./pages/Ask";
import HackerNewsApp from "./pages/HackerNewsApp";
import Jobs from "./pages/Jobs";
import Show from "./pages/Show";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HackerNewsApp />}>
          <Route path="/article" element={<Article />}>
            <Route path="/article/:page" element={<Article />} />
          </Route>
          <Route path="/ask" element={<Ask />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/show" element={<Show />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
