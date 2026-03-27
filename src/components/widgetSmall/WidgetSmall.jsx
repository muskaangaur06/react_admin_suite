import "./widgetSmall.css";
import { modelComparison } from "../../sampleData";

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <div className="widgetSmallHeader">
                <span className="widgetSmallTitle">Model Leaderboard</span>
            </div>
            <table className="modelTable">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Accuracy</th>
                        <th>F1</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {modelComparison.map((m, i) => (
                        <tr key={m.model}>
                            <td className="modelName">
                                <span className={`modelRank rank${i + 1}`}>{i + 1}</span>
                                {m.model}
                            </td>
                            <td className="modelMetric">{(m.Accuracy * 100).toFixed(1)}%</td>
                            <td className="modelMetric">{(m.F1 * 100).toFixed(1)}%</td>
                            <td>
                                <span className={`modelBadge ${i === modelComparison.length - 1 ? "best" : i >= modelComparison.length - 2 ? "good" : "baseline"}`}>
                                    {i === modelComparison.length - 1 ? "Best" : i >= modelComparison.length - 2 ? "Good" : "Baseline"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
