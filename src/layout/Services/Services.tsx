import ServicesItems from "./ServicesItems/ServicesItems";

const Services = () => {
  // objekat odnosno niz ovdje napravi i mapuj ga nemoj ovo
  const services = [
    {
      icon: "truck",
      title: "FREE SHIPPING & RETURN",
      description: "Free shipping for all orders over $35",
    },
    {
      icon: "currency",
      title: "PRICE MATCH GUARANTEE",
      description: "Score the lowest price possible, period.",
    },
    {
      icon: "services",
      title: "ONLINE SUPPORT 24/7",
      description: "We are here to help. 24/7 Support.",
    },
    {
      icon: "payment",
      title: "SECURE PAYMENT",
      description: "Secure and easy online checkout.",
    },
  ];
  return (
    <div className="services-container">
      <div className="services-items">
        {services.map}
        <ServicesItems icon="" title="FREE SHIPPING & RETURN" />
      </div>
    </div>
  );
};
export default Services;
