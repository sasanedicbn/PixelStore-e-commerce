import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingCart,
  FaTiktok,
  FaTruck,
  FaUser,
} from "react-icons/fa";

const Icon = ({
  name,
  size = 84,
  color = "black",
  onClick = () => {},
  className = "",
}: IconProps) => {
  const icons = {
    facebook: (
      <FaFacebook name={name} size={size} color={color} className={className} />
    ),
    instagram: (
      <FaInstagram
        name={name}
        size={size}
        color={color}
        className={className}
      />
    ),
    tiktok: (
      <FaTiktok name={name} size={size} color={color} className={className} />
    ),
    truck: <FaTruck name={name} size={size} color={color} />,
    user: <FaUser name={name} />,
    favourites: <FaHeart name={name} />,
    cart: <FaShoppingCart name={name} />,
  };

  return icons[name as keyof typeof icons] || null;
};

export default Icon;
