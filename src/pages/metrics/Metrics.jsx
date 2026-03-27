import Charts from "../../components/charts/Charts";
import { modelComparison, predVsActual } from "../../sampleData";
import "../experiments/experiments.css";

const metricsData = modelComparison.map(m => ({
    model: m.model,
    Accuracy: +(m.Accuracy * 100).toFixed(1),
    Precision: +(m.Precision * 100).toFixed(1),
    Recall: +(m.Recall * 100).toFixed(1),
    F1: +(m.F1 * 100).toFixed(1),
}));

export default function Metrics() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Evaluation Metrics</h2>
            <p className="pageSubtitle">Performance comparison across all trained models</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                <Charts data={metricsData} title="Accuracy by Model" dataKey="Accuracy" xKey="model" forceBar />
                <Charts data={metricsData} title="F1 Score by Model" dataKey="F1" xKey="model" forceBar />
            </div>
            <div className="expTableWrap">
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>Detailed Metrics</h3>
                <table className="expFullTable">
                    <thead><tr><th>Model</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1 Score</th><th>RMSE</th><th>MAE</th></tr></thead>
                    <tbody>
                        <tr><td className="expModelCell">Transformer</td><td className="expMetricCell">94.0%</td><td className="expMetricCell">93.0%</td><td className="expMetricCell">92.0%</td><td className="expMetricCell">92.5%</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td></tr>
                        <tr><td className="expModelCell">LSTM</td><td className="expMetricCell">93.0%</td><td className="expMetricCell">92.0%</td><td className="expMetricCell">91.0%</td><td className="expMetricCell">91.5%</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td></tr>
                        <tr><td className="expModelCell">XGBoost (Tuned)</td><td className="expMetricCell">93.6%</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">57.55</td><td className="expMetricCell">35.46</td></tr>
                        <tr><td className="expModelCell">Random Forest (Tuned)</td><td className="expMetricCell">92.4%</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">63.11</td><td className="expMetricCell">37.24</td></tr>
                        <tr><td className="expModelCell">SARIMA (Per Type)</td><td className="expMetricCell">92.3%</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expMetricCell">63.30</td><td className="expMetricCell">37.28</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
