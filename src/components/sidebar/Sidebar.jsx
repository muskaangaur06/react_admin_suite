import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, BarChart, Assessment, Storage, BubbleChart, Category, TableChart, Tune } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const menuGroups = [
    {
        title: "Overview",
        items: [
            { label: "Dashboard", icon: <LineStyle />, path: "/" },
            { label: "Experiments", icon: <Timeline />, path: "/experiments" },
            { label: "Model Registry", icon: <Assessment />, path: null },
        ],
    },
    {
        title: "Analysis",
        items: [
            { label: "Datasets", icon: <Storage />, path: "/datasets" },
            { label: "Feature Store", icon: <Category />, path: null },
            { label: "Visualizations", icon: <BubbleChart />, path: null },
            { label: "Statistics", icon: <TableChart />, path: null },
        ],
    },
    {
        title: "ML Pipeline",
        items: [
            { label: "Training", icon: <TrendingUp />, path: null },
            { label: "Hyperparameters", icon: <Tune />, path: null },
            { label: "Metrics", icon: <BarChart />, path: null },
        ],
    },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {menuGroups.map((group) => (
                    <div className="sidebarMenu" key={group.title}>
                        <h3 className="sidebarTitle">{group.title}</h3>
                        <ul className="sidebarList">
                            {group.items.map((item) => {
                                const isActive = item.path && location.pathname === item.path;
                                const content = (
                                    <li className={`sidebarListItem ${isActive ? "active" : ""}`} key={item.label}>
                                        <span className="sidebarIcon">{item.icon}</span>
                                        {item.label}
                                    </li>
                                );
                                return item.path ? (
                                    <Link to={item.path} className="link" key={item.label}>{content}</Link>
                                ) : (
                                    <span key={item.label}>{content}</span>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
