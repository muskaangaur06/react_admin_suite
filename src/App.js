import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiments from "./pages/experiments/Experiments";
import Datasets from "./pages/datasets/Datasets";

function App() {
  return (
    <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/datasets" element={<Datasets />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
