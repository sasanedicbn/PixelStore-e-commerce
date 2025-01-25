const NewsletterAction = () => {
  return (
    <div className="newsletter-container">
      <input
        type="email"
        placeholder="Email address"
        className="newsletter-input"
      />
      <button className="newsletter-button">Subscribe</button>
    </div>
  );
};

export default NewsletterAction;
