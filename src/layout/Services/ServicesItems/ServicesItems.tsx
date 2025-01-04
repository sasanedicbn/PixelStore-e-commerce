import Icon from "../../../UX/Icons";

const ServicesItems = ({ icon, title, description }) => {
  return (
    <div className="single-services">
      <Icon type={icon} size="24" color="red" />
      <div className="single-descriptions">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesItems;
