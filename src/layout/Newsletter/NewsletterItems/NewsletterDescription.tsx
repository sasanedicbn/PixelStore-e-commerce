import Icon from "../../../UX/Icons";

const NewsletterDescription = () => {
  return (
    <div className="description-container">
      <Icon name="letter" size="42" color="grey" />
      <div className="description">
        <h4 className="title">Subscribe To Our Newsletter</h4>
        <p className="details">
          Get all the latest information on Events, Sales and Offers.
        </p>
      </div>
    </div>
  );
};
export default NewsletterDescription;
