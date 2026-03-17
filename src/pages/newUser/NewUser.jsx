import "./newUser.css";
import { useState } from "react";

export default function NewUser() {
    const [form, setForm] = useState({
        username: "",
        fullname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
        status: "active",
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="newUser">
            <h2 className="newUserTitle">New User</h2>

            <form className="newUserForm" onSubmit={handleSubmit}>
                <div className="newUserItem">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="e.g. jsmith"
                    />
                </div>

                <div className="newUserItem">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        value={form.fullname}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                    />
                </div>

                <div className="newUserItem">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                    />
                </div>

                <div className="newUserItem">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Min. 8 characters"
                    />
                </div>

                <div className="newUserItem">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="City, State"
                    />
                </div>

                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={form.gender === "male"}
                            onChange={handleChange}
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={form.gender === "female"}
                            onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            checked={form.gender === "other"}
                            onChange={handleChange}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div className="newUserItem">
                    <label>Status</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="newUserSelect"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

                <button type="submit" className="newUserButton">Create User</button>
            </form>
        </div>
    );
}
