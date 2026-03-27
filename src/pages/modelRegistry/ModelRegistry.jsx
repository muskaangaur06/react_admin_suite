import { modelComparison } from "../../sampleData";
import "../experiments/experiments.css";

export default function ModelRegistry() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Model Registry</h2>
            <p className="pageSubtitle">Versioned models ready for deployment</p>
            <div className="expTableWrap">
                <table className="expFullTable">
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Model</th>
                            <th>Accuracy</th>
                            <th>Precision</th>
                            <th>Recall</th>
                            <th>F1 Score</th>
                            <th>Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modelComparison.map((m, i) => (
                            <tr key={m.model}>
                                <td className="expIdCell">v{modelComparison.length - i}.0</td>
                                <td className="expModelCell">{m.model}</td>
                                <td className="expMetricCell">{(m.Accuracy * 100).toFixed(1)}%</td>
                                <td className="expMetricCell">{(m.Precision * 100).toFixed(1)}%</td>
                                <td className="expMetricCell">{(m.Recall * 100).toFixed(1)}%</td>
                                <td className="expMetricCell">{(m.F1 * 100).toFixed(1)}%</td>
                                <td>
                                    <span className={`expStatus ${i === 0 ? "best" : i === 1 ? "good" : "baseline"}`}>
                                        {i === 0 ? "Production" : i === 1 ? "Staging" : "Archived"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
