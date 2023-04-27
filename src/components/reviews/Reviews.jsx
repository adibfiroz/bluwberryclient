import "./review.css";
import { Link } from "react-router-dom";
import Review from "./Review";
import useFetch from "../../hooks/useFetch";
const Reviews = ({ softId }) => {
  const { data } = useFetch(`/reviews/${softId}`);

  return (
    <div className="reviewUser">
      {data.length ? (
        data.map((review) => <Review key={review._id} review={review} />)
      ) : (
        <p className="noReview">
          There are no reviews available. Be the first to
          <Link to={`/write-review/${softId}`}> Write a Review</Link>
        </p>
      )}
    </div>
  );
};

export default Reviews;
