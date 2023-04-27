import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="fooTop">
          <div className="list">
            <span className="footerLogo">BB</span>
          </div>
          <div className="list middle">
            <p>UseFull Links</p>
            <ul>
              <li>Software categories</li>
              <li>Write a Review</li>
              <li>Advertise with Us</li>
              <li>About</li>
            </ul>
          </div>
          <div className="list">
            <p className="footerTitle">Share</p>
            <div className="socialIcons">
              <FacebookOutlinedIcon className="sIcons" />
              <InstagramIcon className="sIcons" />
              <TwitterIcon className="sIcons" />
            </div>
          </div>
        </div>
      </div>
      <div className="fooBottom">
        <span>
          Copyright © {new Date().getFullYear()} Bluwberry.com. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
