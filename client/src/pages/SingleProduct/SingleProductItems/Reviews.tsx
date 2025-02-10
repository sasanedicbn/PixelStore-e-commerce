const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>You're reviewing:</h2>
      <form>
        <div className="rating">
          <span>Your rating:</span>
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
