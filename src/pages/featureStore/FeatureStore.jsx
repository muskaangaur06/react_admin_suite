import { featureImportance } from "../../sampleData";
import "../experiments/experiments.css";

export default function FeatureStore() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Feature Store</h2>
            <p className="pageSubtitle">Centralized feature definitions and computed values</p>
            <div className="expTableWrap">
                <table className="expFullTable">
                    <thead>
                        <tr>
                            <th>Feature Name</th>
                            <th>Type</th>
                            <th>Importance</th>
                            <th>Source</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featureImportance.map((f, i) => (
                            <tr key={f.feature}>
                                <td className="expModelCell">{f.feature}</td>
                                <td>{i < 4 ? "Engineered" : "Raw"}</td>
                                <td className="expMetricCell">{f.importance.toFixed(3)}</td>
                                <td className="expDateCell">{i < 3 ? "Rolling Window" : i < 6 ? "Calendar" : "Lag Transform"}</td>
                                <td>
                                    <span className={`expStatus ${f.importance > 0.1 ? "best" : "good"}`}>
                                        {f.importance > 0.1 ? "Active" : "Available"}
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
