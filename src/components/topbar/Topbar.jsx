import { useState, useRef, useEffect } from "react";
import "./topbar.css";
import { NotificationsNone, Search, SettingsOutlined, KeyboardArrowDown, CheckCircleOutline, InfoOutlined, ReportProblemOutlined } from "@material-ui/icons";

const notifications = [
    { id: 1, icon: <CheckCircleOutline />, type: "success", text: "New order #4521 confirmed", time: "2 min ago" },
    { id: 2, icon: <InfoOutlined />, type: "info", text: "User James Carter updated profile", time: "15 min ago" },
    { id: 3, icon: <ReportProblemOutlined />, type: "warning", text: "Low stock: Redmi Note 12 (32 left)", time: "1 hr ago" },
    { id: 4, icon: <CheckCircleOutline />, type: "success", text: "Monthly report is ready", time: "3 hrs ago" },
];

export default function Topbar() {
    const [showNotifs, setShowNotifs] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const [unread, setUnread] = useState(notifications.length);
    const notifRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifs(false);
            if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false);
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const handleNotifOpen = () => {
        setShowNotifs(!showNotifs);
        setShowProfile(false);
        if (!showNotifs) setUnread(0);
    };

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin Suite</span>
                </div>

                <div className="topCenter">
                    <div className="searchBar">
                        <Search className="searchIcon" />
                        <input
                            type="text"
                            placeholder="Search users, products..."
                            value={searchVal}
                            onChange={e => setSearchVal(e.target.value)}
                        />
                    </div>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer" ref={notifRef}>
                        <div className="iconBtn" onClick={handleNotifOpen}>
                            <NotificationsNone />
                            {unread > 0 && <span className="topIconBadge">{unread}</span>}
                        </div>
                        {showNotifs && (
                            <div className="dropdown notifDropdown">
                                <div className="dropdownHeader">
                                    <span>Notifications</span>
                                    <span className="markRead" onClick={() => setUnread(0)}>Mark all read</span>
                                </div>
                                <ul>
                                    {notifications.map(n => (
                                        <li key={n.id} className={`notifItem ${n.type}`}>
                                            <span className="notifIcon">{n.icon}</span>
                                            <div className="notifText">
                                                <p>{n.text}</p>
                                                <span>{n.time}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="topbarIconContainer">
                        <div className="iconBtn">
                            <SettingsOutlined />
                        </div>
                    </div>

                    <div className="profileWrap" ref={profileRef}>
                        <div className="profileTrigger" onClick={() => { setShowProfile(!showProfile); setShowNotifs(false); }}>
                            <img src="https://i.pravatar.cc/150?img=47" alt="avatar" className="topAvatar" />
                            <div className="profileInfo">
                                <span className="profileName">Anna Marrie</span>
                                <span className="profileRole">Admin</span>
                            </div>
                            <KeyboardArrowDown fontSize="small" />
                        </div>
                        {showProfile && (
                            <div className="dropdown profileDropdown">
                                <div className="profileDropHeader">
                                    <img src="https://i.pravatar.cc/150?img=47" alt="" />
                                    <div>
                                        <strong>Anna Marrie</strong>
                                        <span>admin@adminsuite.com</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>My Profile</li>
                                    <li>Settings</li>
                                    <li>Billing</li>
                                    <li className="logoutItem">Sign Out</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
