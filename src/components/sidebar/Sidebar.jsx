import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const menuGroups = [
    {
        title: "Dashboard",
        items: [
            { label: "Home", icon: <LineStyle />, path: "/" },
            { label: "Analytics", icon: <Timeline />, path: null },
            { label: "Sales", icon: <TrendingUp />, path: null },
        ],
    },
    {
        title: "Quick Menu",
        items: [
            { label: "Users", icon: <PermIdentity />, path: "/users" },
            { label: "Products", icon: <Storefront />, path: "/products" },
            { label: "Transactions", icon: <AttachMoney />, path: null },
            { label: "Reports", icon: <BarChart />, path: null },
        ],
    },
    {
        title: "Notifications",
        items: [
            { label: "Mail", icon: <MailOutline />, path: null },
            { label: "Feedback", icon: <DynamicFeed />, path: null },
            { label: "Messages", icon: <ChatBubbleOutline />, path: null },
        ],
    },
    {
        title: "Staff",
        items: [
            { label: "Manage", icon: <WorkOutline />, path: null },
            { label: "Analytics", icon: <Timeline />, path: null },
            { label: "Reports", icon: <Report />, path: null },
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
