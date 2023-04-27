import "./review.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import Rating from "@mui/material/Rating";
const Review = ({ review }) => {
  const [like, setLike] = useState(false);

  const { data } = useFetch(`/users/find/${review.userId}`);

  return (
    <div className="review">
      <div className="lUser">
        <img src={data.profilePic || "/userDefault.jpg"} alt="userImage" />
        <div className="userName">{data.username}</div>
      </div>
      <div className="rUserReview">
        <div className="reviewTitle">{review.title}</div>
        <div className="reviewStar">
          <div className="stars">
            <Rating
              name="read-only"
              size="large"
              icon={<StarRoundedIcon fontSize="inherit" />}
              emptyIcon={
                <StarRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              value={review.rating}
              readOnly
            />
          </div>
          <div className="timeago">{moment(review.createdAt).fromNow()}</div>
        </div>
        <div className="desc">{review.desc}</div>
        <div className="likeReview">
          <div onClick={() => setLike(!like)}>
            {like ? (
              <ThumbUpIcon className="thumbUp" />
            ) : (
              <ThumbUpAltOutlinedIcon className="thumbUp" />
            )}
          </div>
          <div className="likeCount">0</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
