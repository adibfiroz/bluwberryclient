import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import RespNavbar from "../../components/navbar/RespNavbar";
import SavedSoftware from "../../components/savedsoftware/SavedSoftware";
import UserProfile from "../../components/userprofile/UserProfile";
import { AuthContext } from "../../context/AuthContext";
import { Fade, Tooltip } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const SoftwareSaved = () => {
  const { user, dispatch } = useContext(AuthContext);

  return (
    <div className="SoftwareSaved">
      <RespNavbar />
      <UserProfile />
      <div className="profileHeader">
        <div className="container dFlex">
          <Link to="/profile">
            <div className="navLinks">Reviews</div>
          </Link>
          <Link to="/edit-profile">
            <div className="navLinks">Edit Profile</div>
          </Link>
          <div className="navLinks active">Software Saved</div>
          <div className="settings">
            <Link to="/" onClick={() => dispatch({ type: "LOGOUT" })}>
              <Tooltip
                className="settIcons"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="LOGOUT"
                arrow
              >
                <span>
                  <ExitToAppOutlinedIcon />
                </span>
              </Tooltip>
            </Link>

            <Tooltip
              className="settIcons"
              title="NOTIFICATION"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              arrow
            >
              <span>
                <NotificationsActiveOutlinedIcon />
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="savedbox">
        <div className="container">
          <div className="dFlex mFlex">
            <div className="lBio">
              <div className="bioTitle">Name</div>
              <input
                className="userInfo"
                type="text"
                placeholder={user.username}
              />
              <div className="bioTitle">BUSINESS EMAIL ADDRESS</div>
              <input
                className="userInfo"
                type="text"
                placeholder={user.email}
              />
              <div className="bioTitle">ADDRESS</div>
              <div className="userInfo">{user.address || "Your address"}</div>
            </div>
            <div className="savedSoft">
              <SavedSoftware saveSoft={user._id} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SoftwareSaved;
