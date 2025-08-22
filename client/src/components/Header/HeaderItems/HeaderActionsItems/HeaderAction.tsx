import { useState } from "react";
import HeaderActionsDrop from "../../../../UX/HeaderActionsDrop";

interface HeaderActionProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const HeaderAction = ({ icon, children }: HeaderActionProps) => {
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
