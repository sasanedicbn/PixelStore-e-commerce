import { useState } from "react";
import HeaderActionsDrop from "../../../../UX/HeaderActionsDrop";

const HeaderAction = ({ icon, children }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className="headerActionUser"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {isHovered ? <HeaderActionsDrop /> : ""}
    </div>
  );
};
export default HeaderAction;
