import "./widgetBig.css";
import { transactions } from "../../sampleData";

const StatusBadge = ({ type }) => (
    <span className={`statusBadge ${type.toLowerCase()}`}>{type}</span>
);

export default function WidgetBig() {
    return (
        <div className="widgetBig">
            <div className="widgetBigHeader">
                <h3 className="widgetBigTitle">Latest Transactions</h3>
                <button className="widgetBigViewAll">View All</button>
            </div>
            <table className="widgetBigTable">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t => (
                        <tr key={t.id}>
                            <td>
                                <div className="widgetBigUser">
                                    <img src={t.avatar} alt={t.name} className="widgetBigImg" />
                                    <span>{t.name}</span>
                                </div>
                            </td>
                            <td className="widgetBigDate">{t.date}</td>
                            <td className="widgetBigAmount">{t.amount}</td>
                            <td><StatusBadge type={t.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
