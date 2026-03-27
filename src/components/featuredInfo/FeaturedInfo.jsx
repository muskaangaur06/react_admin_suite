import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward, Assessment, Storage, TrendingUp, Speed } from "@material-ui/icons";

const stats = [
    { title: "Best R² Score", value: "0.9364", rate: "+2.1%", positive: true, sub: "XGBoost (Tuned)", icon: <Assessment />, color: "#5550BD" },
    { title: "Datasets", value: "4", rate: "+1 new", positive: true, sub: "474K+ total records", icon: <Storage />, color: "var(--btn-teal)" },
    { title: "Experiments", value: "42", rate: "+5 this week", positive: true, sub: "across 3 projects", icon: <TrendingUp />, color: "var(--logo-color)" },
    { title: "Avg RMSE", value: "57.55", rate: "-8.4%", positive: true, sub: "improved from baseline", icon: <Speed />, color: "var(--success)" },
];

export default function FeaturedInfo() {
    return (
        <div className="featured">
            {stats.map((s) => (
                <div className="featuredItem" key={s.title}>
                    <div className="featuredTop">
                        <span className="featuredTitle">{s.title}</span>
                        <div className="featuredIconWrap" style={{ backgroundColor: s.color + "18", color: s.color }}>
                            {s.icon}
                        </div>
                    </div>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{s.value}</span>
                        <span className={`featuredMoneyRate ${s.positive ? "positive" : "negative"}`}>
                            {s.positive ? <ArrowUpward className="featuredIcon" /> : <ArrowDownward className="featuredIcon" />}
                            {s.rate}
                        </span>
                    </div>
                    <span className="featuredSubtitle">{s.sub}</span>
                </div>
            ))}
        </div>
    );
}
