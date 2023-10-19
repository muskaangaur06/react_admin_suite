import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><span className="logo">Admin Suite</span></div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://imgs.search.brave.com/NaY0GK5D9MX4c2r9Q5TmZSk3EKcf__9eDmz2PwOLK2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/ODEzOTU2OC9waG90/by9zdHVkaW8tcG9y/dHJhaXQtb2YtMjAt/eWVhci1vbGQtd29t/YW4uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUZTRWRYNkVH/S3JqYkN2T0prOWlk/aVlaSm9TRXJBOWJ3/aXpIRWtXODZBM2M9" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
