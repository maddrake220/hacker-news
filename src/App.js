import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Ask from "./pages/Ask";
import HackerNewsApp from "./pages/HackerNewsApp";
import Jobs from "./pages/Jobs";
import Show from "./pages/Show";
import "./App.css";
import Item from "./pages/Item";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HackerNewsApp />}>
          <Route path="/article" element={<Article />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/show" element={<Show />} />
          <Route path="item">
            <Route path=":id" element={<Item />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
