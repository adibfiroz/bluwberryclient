import "./savedsoftware.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Rating from "@mui/material/Rating";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const SavedSoftware = ({ saveSoft }) => {
  const { data } = useFetch(`/users/software/${saveSoft}`);

  return (
    <div>
      {data &&
        data.map((softList) => (
          <div className="savedsoftware" key={softList}>
            <div className="dFlex">
              <DeleteForeverRoundedIcon className="delete" />
              <div className="lsoftImg">
                <img
                  alt="defaultSoft"
                  src={softList?.sofwareLogo || "/defaultSoftware.png"}
                />
              </div>
              <div className="softDeatials">
                <Link to={`/${softList.name}-${softList._id}`}>
                  <div className="softTitle">{softList.name}</div>
                </Link>
                <div className="stars">
                  <Rating
                    name="read-only"
                    size="large"
                    icon={<StarRoundedIcon fontSize="inherit" />}
                    emptyIcon={
                      <StarRoundedIcon
                        style={{ opacity: 0.55 }}
                        fontSize="inherit"
                      />
                    }
                    value={Math.round(
                      softList.totalStars / softList.starNumber
                    )}
                    readOnly
                  />
                  <div className="reviewCount">
                    {softList.starNumber} Reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="profileRevDesc">
              {softList.whatIs}
              <span style={{ color: "#1859B4", fontWeight: "bold" }}>
                ...Read More
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SavedSoftware;
