import React, { useContext, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

const RespNavbar = (props) => {
  const [open, setOpen] = useState(false);
  const [opensearch, setOpenSearch] = useState(false);
  const [userName, setuserName] = useState("");

  const { data, loading } = useFetch("/software");
  const { user, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setuserName(e.target.value);
  };

  const handleClear = (e) => {
    setuserName((e.target.value = ""));
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });

    setOpen(false, document.body.classList.remove("scrollHide"));
  };

  return (
    <div className="respNavbar">
      <div className="mContainer">
        <div className="Lcontents">
          <Link to="/">
            <span className="logo">Bluwberry</span>
          </Link>
        </div>
        <div className="Rcontents">
          <SearchRoundedIcon onClick={() => setOpenSearch(true)} />
          <MenuRoundedIcon
            className="icon"
            onClick={() =>
              setOpen(true, document.body.classList.add("scrollHide"))
            }
          />
        </div>
      </div>

      {opensearch && (
        <div className="searchModal">
          <div className="resSearch">
            <ArrowBackIosRoundedIcon
              className="searchIcons"
              onClick={() => setOpenSearch(false)}
            />
            <div className="shortLogo">BB</div>
            <input
              type="text"
              placeholder="Search Softwares"
              value={userName}
              onChange={handleChange}
            />
            {userName ? (
              <CloseRoundedIcon className="searchIcons" onClick={handleClear} />
            ) : (
              <SearchRoundedIcon className="searchIcons" />
            )}
          </div>
          <div className="resultText">
            {userName.length > 1 && (
              <ul>
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {data
                      .filter((search) =>
                        search.name
                          .toLowerCase()
                          .includes(userName.toLowerCase())
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((search) => (
                        <li key={search._id}>
                          <Link to={`/${search.name}-${search._id}`}>
                            {search.name}
                          </Link>
                        </li>
                      ))}
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
      {open && (
        <div>
          <div
            className="backLayer"
            onClick={() =>
              setOpen(false, document.body.classList.remove("scrollHide"))
            }
          ></div>
          <div className="modal">
            <div className="modalContent">
              <div className="top">
                {!user ? (
                  <ul>
                    <li
                      style={{
                        color: "#1859B4",
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      MENU
                    </li>
                    <hr />
                    <Link
                      to="/"
                      onClick={() =>
                        setOpen(
                          false,
                          document.body.classList.remove("scrollHide")
                        )
                      }
                    >
                      <li>
                        <HomeOutlinedIcon className="menuIcon" />
                        Home
                      </li>
                    </Link>
                    <Link
                      to="/categories"
                      onClick={() =>
                        setOpen(
                          false,
                          document.body.classList.remove("scrollHide")
                        )
                      }
                    >
                      <li>
                        <CategoryOutlinedIcon className="menuIcon" />
                        Software Categories
                      </li>
                    </Link>
                    <li>
                      <PanoramaOutlinedIcon className="menuIcon" />
                      Advertise with us
                    </li>
                    <Link
                      to="/categories"
                      onClick={() =>
                        setOpen(
                          false,
                          document.body.classList.remove("scrollHide")
                        )
                      }
                    >
                      <li>
                        <RateReviewOutlinedIcon className="menuIcon" />
                        Write a Review
                      </li>
                    </Link>
                    <hr />
                    <Link
                      to="/login"
                      onClick={() =>
                        setOpen(
                          false,
                          document.body.classList.remove("scrollHide")
                        )
                      }
                    >
                      <li>
                        <LoginOutlinedIcon className="menuIcon" />
                        Login In / Sign Up
                      </li>
                    </Link>
                  </ul>
                ) : (
                  <>
                    <div className="userSection">
                      <Link to={`/profile/?user=${user.username}`}>
                        <img
                          src={user.profilePic || "/userDefault.jpg"}
                          alt="userImg"
                        />
                      </Link>
                      <div className="userMenu">{user.username}</div>
                    </div>
                    <ul>
                      <Link
                        to="/"
                        onClick={() =>
                          setOpen(
                            false,
                            document.body.classList.remove("scrollHide")
                          )
                        }
                      >
                        <li>
                          <HomeOutlinedIcon className="menuIcon" />
                          Home
                        </li>
                      </Link>
                      <Link
                        to={`/profile/?user=${user.username}`}
                        onClick={() =>
                          setOpen(
                            false,
                            document.body.classList.remove("scrollHide")
                          )
                        }
                      >
                        <li>
                          <AccountCircleOutlinedIcon className="menuIcon" />
                          Profile
                        </li>
                      </Link>
                      <Link
                        to="/categories"
                        onClick={() =>
                          setOpen(
                            false,
                            document.body.classList.remove("scrollHide")
                          )
                        }
                      >
                        <li>
                          <CategoryOutlinedIcon className="menuIcon" />
                          Software Categories
                        </li>
                      </Link>
                      <Link
                        to="/categories"
                        onClick={() =>
                          setOpen(
                            false,
                            document.body.classList.remove("scrollHide")
                          )
                        }
                      >
                        <li>
                          <RateReviewOutlinedIcon className="menuIcon" />
                          Write a Review
                        </li>
                      </Link>
                    </ul>
                  </>
                )}
              </div>

              {user ? (
                <div className="bottom">
                  <ul>
                    <hr />
                    <Link to="/" onClick={handleLogout}>
                      <li style={{ color: "red" }}>
                        <LogoutOutlinedIcon className="logout" />
                        Logout
                      </li>
                    </Link>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RespNavbar;
