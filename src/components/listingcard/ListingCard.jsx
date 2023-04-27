import "./listingcard.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ListingCard = ({ item }) => {
  return (
    <div>
      <div className="listingcard">
        <div className="listTop">
          <div className="sofwtareContent">
            <div className="softImg">
              <img
                alt="softwaredefault"
                src={item.sofwareLogo || "/defaultSoftware.png"}
              />
            </div>
            <div className="softDeatials">
              <Link to={`/${item.name}-${item._id}`}>
                <div className="softTitle">{item.name}</div>
              </Link>
              <div className="stars">
                <Rating
                  name="read-only"
                  size="large"
                  value={Math.round(item.totalStars / item.starNumber)}
                  icon={<StarRoundedIcon fontSize="inherit" />}
                  emptyIcon={
                    <StarRoundedIcon
                      style={{ opacity: 0.55 }}
                      fontSize="inherit"
                    />
                  }
                  readOnly
                />
                <div className="starCount">
                  {Math.round(item.totalStars / item.starNumber) || 0}
                </div>
              </div>
              <div className="reviewCount">{item.starNumber} Reviews</div>
            </div>
            <div className="like">
              <FavoriteBorderRoundedIcon className="unfillIcon" />
            </div>
          </div>
        </div>
        <div className="softAbout">
          <p>
            {item.whatIs.substring(0, 300)}...
            <Link to={`/${item.name}-${item._id}`}>Learn More</Link>
          </p>
        </div>
        {item.popular && <span className="poptxt">Popular</span>}
      </div>
    </div>
  );
};

export default ListingCard;
