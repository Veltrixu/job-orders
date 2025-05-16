import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarLink({ name, to, icon }) {
  return (
    <NavLink
      to={to}
      className="flex gap-2 items-center justify-start text-[1rem] p-[0.5rem_1rem] rounded-sm hover:text-[var(--primary-hover)] transition-all duration-100 ease-in"
    >
      <FontAwesomeIcon icon={icon} />
      {name}
    </NavLink>
  );
}

export default SidebarLink;
