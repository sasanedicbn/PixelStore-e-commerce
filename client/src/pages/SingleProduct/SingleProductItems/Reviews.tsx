import { useState } from "react";
import { useGetUserQuery } from "../../../store/slices/apiSlice";
import ReviewStars from "./ReviewStars";

const Reviews = ({ product }) => {
  const { data: user, isLoading } = useGetUserQuery();
  const [userData, setUserData] = useState({
    rating: 0,
    name: user ? user.name : "",
    review: "",
  });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  console.log(user, "ima li u rivjuju");
  return (
    <div className="reviews-container">
      <p>
        You're reviewing: <span>{product.product.title}</span>
      </p>
      <form>
        <div className="rating">
          <span>Your Rating:</span>
          <ReviewStars totalStars={5} />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Name:</label>
          <input
            type="text"
            id="nickname"
            value={user.name ? user.name : ""}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            // value={review}
            required
          />
        </div>
        <button type="submit">SUBMIT REVIEW</button>
      </form>
    </div>
  );
};

export default Reviews;
