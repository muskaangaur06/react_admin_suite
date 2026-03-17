import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward, AttachMoney, ShoppingCartOutlined, PeopleAltOutlined, TrendingUp } from "@material-ui/icons";

const stats = [
    { title: "Revenue", value: "$24,560", rate: "+12.4%", positive: true, sub: "vs last month", icon: <AttachMoney />, color: "#5550BD" },
    { title: "Sales", value: "1,842", rate: "+8.2%", positive: true, sub: "vs last month", icon: <ShoppingCartOutlined />, color: "var(--btn-teal)" },
    { title: "Active Users", value: "8,400", rate: "-3.1%", positive: false, sub: "vs last month", icon: <PeopleAltOutlined />, color: "var(--logo-color)" },
    { title: "Growth Rate", value: "18.6%", rate: "+2.3%", positive: true, sub: "vs last month", icon: <TrendingUp />, color: "var(--success)" },
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
