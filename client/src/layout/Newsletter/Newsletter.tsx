import NewsletterAction from "./NewsletterItems/NewsletterAction";
import NewsletterDescription from "./NewsletterItems/NewsletterDescription";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <NewsletterDescription />
      <NewsletterAction />
    </div>
  );
};

export default Newsletter;
