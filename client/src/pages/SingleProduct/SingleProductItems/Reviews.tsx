const Reviews = ({ product }) => {
  console.log("iz reviewa", product);
  return (
    <div className="reviews-container">
      <p>You're reviewing:</p>
      <span>{product.product.title}</span>
      <form>
        <div className="rating">
          <span>Your Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              //   className={`star ${star <= rating ? "selected" : ""}`}
            >
              ★
            </span>
          ))}
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
