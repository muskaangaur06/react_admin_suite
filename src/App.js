import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiments from "./pages/experiments/Experiments";
import Datasets from "./pages/datasets/Datasets";
import ModelRegistry from "./pages/modelRegistry/ModelRegistry";
import FeatureStore from "./pages/featureStore/FeatureStore";
import Visualizations from "./pages/visualizations/Visualizations";
import Statistics from "./pages/statistics/Statistics";
import Training from "./pages/training/Training";
import Hyperparameters from "./pages/hyperparameters/Hyperparameters";
import Metrics from "./pages/metrics/Metrics";

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
            <Route path="/model-registry" element={<ModelRegistry />} />
            <Route path="/feature-store" element={<FeatureStore />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/training" element={<Training />} />
            <Route path="/hyperparameters" element={<Hyperparameters />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
