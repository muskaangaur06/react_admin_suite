import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
import { newMembers } from "../../sampleData";
import { Link } from "react-router-dom";

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <div className="widgetSmallHeader">
                <span className="widgetSmallTitle">New Members</span>
                <Link to="/users" className="link widgetSmallSeeAll">See all</Link>
            </div>
            <ul className="widgetSmallList">
                {newMembers.map(member => (
                    <li className="widgetSmallListItem" key={member.id}>
                        <img src={member.avatar} alt={member.name} className="widgetSmallImg" />
                        <div className="widgetSmallUser">
                            <span className="widgetSmallUsername">{member.name}</span>
                            <span className="widgetSmallUsertitle">{member.role}</span>
                        </div>
                        <Link to={`/user/${member.id}`}>
                            <button className="widgetSmallBtn">
                                <Visibility className="widgetSmallIcon" />
                                View
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
