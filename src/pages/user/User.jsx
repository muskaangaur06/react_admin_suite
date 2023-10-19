import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img src="https://imgs.search.brave.com/WXf2Wk7cWf8R2hF17evg6uyFl4x7P5z9L1_BbaGtzrA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQ1LzUyLzY3/LzM2MF9GXzY0NTUy/NjcwOV9URk5tYW9F/TEgzY0FYaVMzQklF/VlJIdHZPTGo0eGpE/dS5qcGc" alt="" className="userDisplayImg"/>
            <div className="userDisplayTopTitle">
              <span className="userDisplayUsername">Anna Marrie</span>
              <span className="userDisplayUserTitle">Marketing Specialist</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon"/>
              <span className="userDisplayInfoTitle">annamarrie</span>
            </div>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon"/>
              <span className="userDisplayInfoTitle">01.02.2000</span>
            </div>
            <span className="userDisplayTitle">Contact Details</span>
            <div className="userDisplayInfo">
              <PhoneAndroid className="userDisplayIcon"/>
              <span className="userDisplayInfoTitle">9876543210</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon"/>
              <span className="userDisplayInfoTitle">annamarrie@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userDisplayIcon"/>
              <span className="userDisplayInfoTitle">San Fransisco, CA</span>
            </div>
          </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" 
                  placeholder="annamarrie" 
                  className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" 
                  placeholder="Anna Marrie" 
                  className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" 
                  placeholder="annamarrie@gmail.com" 
                  className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone No.</label>
                  <input type="text" 
                  placeholder="9876543210" 
                  className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" 
                  placeholder="San Fransisco, CA" 
                  className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg"
                  src="https://imgs.search.brave.com/WXf2Wk7cWf8R2hF17evg6uyFl4x7P5z9L1_BbaGtzrA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQ1LzUyLzY3/LzM2MF9GXzY0NTUy/NjcwOV9URk5tYW9F/TEgzY0FYaVMzQklF/VlJIdHZPTGo0eGpE/dS5qcGc" alt="" />
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display: "none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
