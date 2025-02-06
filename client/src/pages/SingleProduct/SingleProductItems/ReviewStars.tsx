import { useState } from "react";

const ReviewStars = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    setRating(star);
    if (onRatingChange) onRatingChange(star);
  };

  return (
    <div className="review-stars">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${
              starValue <= (hover || rating) ? "filled" : "empty"
            }`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default ReviewStars;
