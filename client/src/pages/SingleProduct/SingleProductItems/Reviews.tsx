import { useState } from "react";
import { useGetUserQuery } from "../../../store/slices/apiSlice";
import ReviewStars from "./ReviewStars";

const Reviews = ({ product }) => {
  const { data: user, isLoading } = useGetUserQuery();
  const [userData, setUserData] = useState({
    rating: 5,
    review: "",
  });

  const updateRating = (newRating) => {
    setUserData({ ...userData, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...userData,
      name: user?.name || userData.name,
    };

    console.log(payload, "submited");
  };

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
          {user ? (
            <input type="text" id="name" value={user.name} disabled />
          ) : (
            <input
              type="text"
              id="name"
              value={userData.name || ""}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              required
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={userData.review}
            onChange={(e) =>
              setUserData({ ...userData, review: e.target.value })
            }
            required
          />
        </div>

        <button type="submit">SUBMIT REVIEW</button>
      </form>
    </div>
  );
};

export default Reviews;
