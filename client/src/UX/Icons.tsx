import { AiFillLock, AiOutlineRight } from "react-icons/ai";
import {
  FaDollarSign,
  FaEnvelope,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingCart,
  FaTiktok,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoChevronDown, IoMenu } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

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
    favouritesSingle: <FaHeart name={name} color={color} />,
    cart: <FaShoppingCart name={name} />,
    burger: <IoMenu name={name} size={size} color={color} />,
    down: <IoChevronDown name={name} color={color} />,
    right: <AiOutlineRight name={name} color={color} size={size} />,
    sliderRight: <FiArrowRight name={name} size={size} color={color} />,
    sliderLeft: <FiArrowLeft name={name} size={size} color={color} />,
    currency: <FaDollarSign name={name} size={size} color={color} />,
    services: <RiCustomerService2Line name={name} size={size} color={color} />,
    payment: <AiFillLock name={name} size={size} color={color} />,
    letter: <FaEnvelope name={name} size={size} color={color} />,
  };

  return icons[name as keyof typeof icons] || null;
};

export default Icon;
