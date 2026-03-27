import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, BarChart, Assessment, Storage, BubbleChart, Category, TableChart, Tune } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const menuGroups = [
    {
        title: "Overview",
        items: [
            { label: "Dashboard", icon: <LineStyle />, path: "/" },
            { label: "Experiments", icon: <Timeline />, path: "/experiments" },
            { label: "Model Registry", icon: <Assessment />, path: "/model-registry" },
        ],
    },
    {
        title: "Analysis",
        items: [
            { label: "Datasets", icon: <Storage />, path: "/datasets" },
            { label: "Feature Store", icon: <Category />, path: "/feature-store" },
            { label: "Visualizations", icon: <BubbleChart />, path: "/visualizations" },
            { label: "Statistics", icon: <TableChart />, path: "/statistics" },
        ],
    },
    {
        title: "ML Pipeline",
        items: [
            { label: "Training", icon: <TrendingUp />, path: "/training" },
            { label: "Hyperparameters", icon: <Tune />, path: "/hyperparameters" },
            { label: "Metrics", icon: <BarChart />, path: "/metrics" },
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
                                return (
                                    <Link to={item.path} className="link" key={item.label}>{content}</Link>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
