import { useState } from "react";
import Icon from "../../../../UX/Icons";

const HeaderActionUser = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="headerActionUser">
      <Icon name="user" />
    </div>
  );
};
export default HeaderActionUser;
