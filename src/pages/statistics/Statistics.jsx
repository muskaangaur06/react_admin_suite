import { correlationData } from "../../sampleData";
import "../experiments/experiments.css";

export default function Statistics() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Statistical Analysis</h2>
            <p className="pageSubtitle">Hypothesis tests, correlations, and distribution metrics</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>Hypothesis Test Results</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Test</th><th>Statistic</th><th>P-Value</th><th>Result</th></tr></thead>
                        <tbody>
                            <tr><td className="expModelCell">Summer vs Winter Crime (T-Test)</td><td className="expMetricCell">2.104</td><td className="expMetricCell">0.039</td><td><span className="expStatus best">Reject H0</span></td></tr>
                            <tr><td className="expModelCell">Vehicle Theft vs Bicycle (Mann-Whitney)</td><td className="expMetricCell">24,332</td><td className="expMetricCell">1.3e-52</td><td><span className="expStatus best">Reject H0</span></td></tr>
                            <tr><td className="expModelCell">Crime by Neighbourhood (ANOVA)</td><td className="expMetricCell">899.76</td><td className="expMetricCell">1.8e-289</td><td><span className="expStatus best">Reject H0</span></td></tr>
                            <tr><td className="expModelCell">Salary by Job Category (ANOVA)</td><td className="expMetricCell">8.42</td><td className="expMetricCell">0.0001</td><td><span className="expStatus best">Reject H0</span></td></tr>
                            <tr><td className="expModelCell">Large vs Small Company Pay (T-Test)</td><td className="expMetricCell">3.21</td><td className="expMetricCell">0.0014</td><td><span className="expStatus best">Reject H0</span></td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="expTableWrap">
                    <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "14px", color: "#2e2e2e" }}>Top Correlations (Marine Engine Sensors)</h3>
                    <table className="expFullTable">
                        <thead><tr><th>Sensor A</th><th>Sensor B</th><th>Correlation</th><th>Strength</th></tr></thead>
                        <tbody>
                            {correlationData.map((c, i) => (
                                <tr key={i}>
                                    <td className="expModelCell">{c.x}</td>
                                    <td>{c.y}</td>
                                    <td className="expMetricCell">{c.corr.toFixed(2)}</td>
                                    <td><span className={`expStatus ${Math.abs(c.corr) > 0.7 ? "best" : "good"}`}>{Math.abs(c.corr) > 0.7 ? "Strong" : "Moderate"}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
