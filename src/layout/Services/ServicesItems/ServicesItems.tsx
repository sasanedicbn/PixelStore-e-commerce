import Icon from "../../../UX/Icons";

const ServicesItems = ({ icon, title, description }) => {
  return (
    <div className="single-services">
      <Icon type={icon} size="24" color="red" />
      <div className="single-descriptions">
        <h4>FREE SHIPPING & RETURN</h4>
        <p>Free shipping on all orders over $35.</p>
      </div>
    </div>
  );
};

export default ServicesItems;
