import Charts from "../../components/charts/Charts";
import { predVsActual, dataDistribution, trainingHistory } from "../../sampleData";
import "../experiments/experiments.css";

export default function Visualizations() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Visualizations</h2>
            <p className="pageSubtitle">Interactive charts for data exploration and model analysis</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <Charts data={predVsActual} title="Predicted vs Actual (Monthly)" grid dataKey="Actual" secondKey="Predicted" xKey="month" />
                <Charts data={dataDistribution} title="Target Variable Distribution" dataKey="count" xKey="bin" forceBar />
                <Charts data={trainingHistory} title="Training Accuracy Curve" grid dataKey="Train Acc" secondKey="Val Acc" xKey="epoch" />
                <Charts data={trainingHistory} title="Loss Convergence" grid dataKey="Train Loss" secondKey="Val Loss" xKey="epoch" />
            </div>
        </div>
    );
}
