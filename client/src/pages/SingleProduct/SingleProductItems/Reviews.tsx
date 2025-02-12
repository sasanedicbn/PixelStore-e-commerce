import ReviewStars from "./ReviewStars";

const Reviews = ({ product }) => {
  console.log("iz reviewa", product);
  return (
    <div className="reviews-container">
      <p>You're reviewing:</p>
      <span>{product.product.title}</span>
      <form>
        <div className="rating">
          <span>Your Rating:</span>
          <ReviewStars
            totalStars={5}
            onRatingChange={(rating) => console.log(rating)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            // value={nickname}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            // value={summary}
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
