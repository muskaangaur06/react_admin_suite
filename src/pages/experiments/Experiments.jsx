import "./experiments.css";
import { experiments } from "../../sampleData";

export default function Experiments() {
    return (
        <div className="experimentsPage">
            <h2 className="pageTitle">Experiment Tracker</h2>
            <p className="pageSubtitle">All model training runs and evaluation results</p>
            <div className="expTableWrap">
                <table className="expFullTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Model</th>
                            <th>Dataset</th>
                            <th>Accuracy</th>
                            <th>RMSE</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experiments.map(e => (
                            <tr key={e.id}>
                                <td className="expIdCell">{e.id}</td>
                                <td className="expModelCell">{e.model}</td>
                                <td>{e.dataset}</td>
                                <td className="expMetricCell">{e.accuracy}</td>
                                <td className="expMetricCell">{e.rmse}</td>
                                <td className="expDateCell">{e.date}</td>
                                <td>
                                    <span className={`expStatus ${e.status.toLowerCase()}`}>{e.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
