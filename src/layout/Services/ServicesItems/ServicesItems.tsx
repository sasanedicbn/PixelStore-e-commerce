import Icon from "../../../UX/Icons";

const ServicesItems = ({ icon, title, description }) => {
  return (
    <div className="single-services">
      <Icon name={icon} size="32" color="#e32726" />
      <div className="single-descriptions">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItems;
