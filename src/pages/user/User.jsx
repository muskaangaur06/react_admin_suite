import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import "./user.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { userRows } from "../../sampleData";

export default function User() {
    const { userId } = useParams();
    const found = userRows.find(u => u.id === Number(userId));

    const [formData, setFormData] = useState({
        username: found?.username ?? "",
        fullname: found?.fullname ?? "",
        email: found?.email ?? "",
        phone: found?.phone ?? "",
        address: found?.address ?? "",
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h2 className="userTitle">User Profile</h2>
                <Link to="/newUser">
                    <button className="userAddButton">+ New User</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userDisplay">
                    <div className="userDisplayTop">
                        <img
                            src={found?.avatar ?? `https://i.pravatar.cc/150?u=${userId}`}
                            alt={found?.username}
                            className="userDisplayImg"
                        />
                        <div className="userDisplayTopTitle">
                            <span className="userDisplayUsername">{found?.username ?? "Unknown"}</span>
                            <span className="userDisplayUserTitle">{found?.role ?? "User"}</span>
                        </div>
                    </div>

                    <div className="userDisplayBottom">
                        <span className="userDisplayTitle">Account Details</span>
                        <div className="userDisplayInfo">
                            <PermIdentity className="userDisplayIcon" />
                            <span className="userDisplayInfoTitle">{found?.username ?? "—"}</span>
                        </div>
                        <div className="userDisplayInfo">
                            <CalendarToday className="userDisplayIcon" />
                            <span className="userDisplayInfoTitle">{found?.joined ?? "—"}</span>
                        </div>

                        <span className="userDisplayTitle">Contact Details</span>
                        <div className="userDisplayInfo">
                            <PhoneAndroid className="userDisplayIcon" />
                            <span className="userDisplayInfoTitle">{found?.phone ?? "—"}</span>
                        </div>
                        <div className="userDisplayInfo">
                            <MailOutline className="userDisplayIcon" />
                            <span className="userDisplayInfoTitle">{found?.email ?? "—"}</span>
                        </div>
                        <div className="userDisplayInfo">
                            <LocationSearching className="userDisplayIcon" />
                            <span className="userDisplayInfoTitle">{found?.address ?? "—"}</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit Profile</span>
                    <form className="userUpdateForm" onSubmit={handleSubmit}>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="userUpdateInput"
                                    placeholder="Address"
                                />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={found?.avatar ?? `https://i.pravatar.cc/150?u=${userId}`}
                                    alt="avatar"
                                />
                                <label htmlFor="userFile" className="userUpdateIconLabel">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="userFile" style={{ display: "none" }} />
                            </div>
                            <button type="submit" className="userUpdateButton">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
