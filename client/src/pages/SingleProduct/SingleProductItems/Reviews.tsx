import { useState } from "react";
import { useGetUserQuery } from "../../../store/slices/apiSlice";
import ReviewStars from "./ReviewStars";

const Reviews = ({ product }) => {
  const { data: user, isLoading } = useGetUserQuery();
  const [userData, setUserData] = useState({
    rating: 5,
    name: "",
    review: "",
  });
  const updateRating = (newRating) => {
    setUserData({ ...userData, rating: newRating });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, "submited");
  };
  console.log(userData, "ima li u rivjuju");
  return (
    <div className="reviews-container">
      <p>
        You're reviewing: <span>{product.product.title}</span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          <span>Your Rating:</span>
          <ReviewStars
            totalStars={userData.rating}
            updateRating={updateRating}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user?.name || userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={userData.review}
            required
            onChange={(e) => {
              setUserData({ ...userData, review: e.target.value });
            }}
          />
        </div>
        <button type="submit">SUBMIT REVIEW</button>
      </form>
    </div>
  );
};

export default Reviews;
