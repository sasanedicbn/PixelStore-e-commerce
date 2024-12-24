import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const Icon = ({
  name,
  size = 24,
  color = "black",
  onClick = () => {},
  className = "",
}: IconProps) => {
  const icons: { [key: string]: React.ElementType } = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    tiktok: FaTiktok,
  };

  const SelectedIcon = icons[name];

  return (
    <SelectedIcon
      size={size}
      color={color}
      onClick={onClick}
      className={className}
    />
  );
};

export default Icon;
