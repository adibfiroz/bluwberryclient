import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import UserProfile from "../../components/userprofile/UserProfile";
import RespNavbar from "../../components/navbar/RespNavbar";
import { AuthContext } from "../../context/AuthContext";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import newRequest from "../../config";
import { Fade, Tooltip } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditProfile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [mobile, setMobile] = useState(user.mobile);
  const [linkIn, setLinkIn] = useState(user.linkIn);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [zipcode, setZipcode] = useState(user.zipcode);
  const [address, setAddress] = useState(user.address);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleEditUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      mobile,
      linkIn,
      city,
      country,
      zipcode,
      address,
    };

    try {
      const res = await newRequest.put("/users/" + user._id, updateUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setOpen(true);
      setLoading(false);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="EditProfile">
      <RespNavbar />
      <UserProfile />
      <div className="profileHeader">
        <div className="container dFlex">
          <Link to="/profile">
            <div className="navLinks">Reviews</div>
          </Link>
          <div className="navLinks active">Edit Profile</div>
          <Link to="/software-saved">
            <div className="navLinks">Software Saved</div>
          </Link>
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

      <div className="editForm">
        <div className="container">
          <div className="dFlex">
            <div className="lEditUser">
              <img src={user.profilePic || "/userDefault.jpg"} alt="naruto" />
              <div className="userName">{user.username}</div>
              <div className="address">{user.city}</div>
            </div>
            <div className="rEdit">
              <h2>Edit Profile</h2>
              <form onSubmit={handleEditUpdate}>
                <div className="dFlex">
                  <input
                    type="text"
                    className="editInputs"
                    placeholder={user.username}
                    value={user.username}
                    disabled
                  />
                  <input
                    type="email"
                    className="editInputs"
                    placeholder={user.email}
                    value={user.email}
                    disabled
                  />
                </div>
                <div className="dFlex">
                  <input
                    type="number"
                    maxLength="10"
                    className="editInputs"
                    placeholder={user.mobile || "Your mobile"}
                    onChange={(e) => setMobile(e.target.value)}
                    defaultValue={user.mobile}
                  />
                  <input
                    type="text"
                    className="editInputs"
                    placeholder={user.linkIn || "Your linkedIn"}
                    onChange={(e) => setLinkIn(e.target.value)}
                    defaultValue={user.linkIn}
                  />
                </div>
                <div className="dFlex">
                  <input
                    type="text"
                    className="editInputs flex3"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={user.city || "Your city"}
                    defaultValue={user.city}
                  />
                  <input
                    type="text"
                    className="editInputs flex3"
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={user.country || "Your country"}
                    defaultValue={user.country}
                  />
                  <input
                    type="number"
                    className="editInputs flex3"
                    onChange={(e) => setZipcode(e.target.value)}
                    placeholder={user.zipcode || "Your zipcode"}
                    defaultValue={user.zipcode}
                  />
                </div>
                <div className="dFlex">
                  <input
                    type="text"
                    className="editInputs"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={user.address || "Your address"}
                    defaultValue={user.address}
                  />
                </div>
                <button disabled={loading} className="updateBtn">
                  {loading ? (
                    <img alt="" src="/loading.gif" width="50" height="50" />
                  ) : (
                    "Update"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your Profile Has Been Updated!
          </Alert>
        </Snackbar>
      </Stack>
      <Footer />
    </div>
  );
};

export default EditProfile;
