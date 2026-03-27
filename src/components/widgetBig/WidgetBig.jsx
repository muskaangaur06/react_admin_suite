import "./widgetBig.css";
import { experiments } from "../../sampleData";

const StatusBadge = ({ type }) => (
    <span className={`statusBadge ${type.toLowerCase()}`}>{type}</span>
);

export default function WidgetBig() {
    return (
        <div className="widgetBig">
            <div className="widgetBigHeader">
                <h3 className="widgetBigTitle">Recent Experiments</h3>
            </div>
            <table className="widgetBigTable">
                <thead>
                    <tr>
                        <th>Experiment</th>
                        <th>Model</th>
                        <th>RMSE</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {experiments.map(e => (
                        <tr key={e.id}>
                            <td>
                                <div className="expId">{e.id}</div>
                                <div className="expDataset">{e.dataset}</div>
                            </td>
                            <td className="expModel">{e.model}</td>
                            <td className="expMetric">{e.rmse}</td>
                            <td><StatusBadge type={e.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
