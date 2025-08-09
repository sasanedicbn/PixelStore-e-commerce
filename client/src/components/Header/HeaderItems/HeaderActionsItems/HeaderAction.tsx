import { useState } from "react";
import HeaderActionsDrop from "../../../../UX/HeaderActionsDrop";

const HeaderAction = ({ icon, children }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <div
      className="headerAction"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {isHovered && <HeaderActionsDrop>{children}</HeaderActionsDrop>}
    </div>
  );
};
export default HeaderAction;
