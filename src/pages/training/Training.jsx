import Charts from "../../components/charts/Charts";
import { trainingHistory } from "../../sampleData";
import "../experiments/experiments.css";

export default function Training() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Model Training</h2>
            <p className="pageSubtitle">Training runs, loss curves, and convergence tracking</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                <Charts data={trainingHistory} title="Loss Curve (Train vs Validation)" grid dataKey="Train Loss" secondKey="Val Loss" xKey="epoch" />
                <Charts data={trainingHistory} title="Accuracy Curve (Train vs Validation)" grid dataKey="Train Acc" secondKey="Val Acc" xKey="epoch" />
            </div>
            <div className="expTableWrap">
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>Training Run Log</h3>
                <table className="expFullTable">
                    <thead><tr><th>Run</th><th>Model</th><th>Epochs</th><th>Final Train Loss</th><th>Final Val Loss</th><th>Duration</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td className="expIdCell">RUN-012</td><td className="expModelCell">Transformer</td><td>40</td><td className="expMetricCell">0.070</td><td className="expMetricCell">0.250</td><td className="expDateCell">4h 12m</td><td><span className="expStatus best">Complete</span></td></tr>
                        <tr><td className="expIdCell">RUN-011</td><td className="expModelCell">LSTM (BiDir)</td><td>40</td><td className="expMetricCell">0.090</td><td className="expMetricCell">0.260</td><td className="expDateCell">2h 45m</td><td><span className="expStatus best">Complete</span></td></tr>
                        <tr><td className="expIdCell">RUN-010</td><td className="expModelCell">XGBoost + GridSearch</td><td>-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expDateCell">18m</td><td><span className="expStatus best">Complete</span></td></tr>
                        <tr><td className="expIdCell">RUN-009</td><td className="expModelCell">Random Forest + RandomSearch</td><td>-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expDateCell">12m</td><td><span className="expStatus good">Complete</span></td></tr>
                        <tr><td className="expIdCell">RUN-008</td><td className="expModelCell">Logistic Regression</td><td>-</td><td className="expMetricCell">-</td><td className="expMetricCell">-</td><td className="expDateCell">8s</td><td><span className="expStatus baseline">Baseline</span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
