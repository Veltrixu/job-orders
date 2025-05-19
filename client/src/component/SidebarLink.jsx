import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarLink({ name, to, icon }) {
  return (
    <NavLink
      to={to}
      className="flex gap-2 items-center mr-auto ml-0 text-[#00000075] text-[0.9rem] p-[0.5rem_1rem] rounded-sm hover:bg-[#00000010] transition-all duration-100 ease-in"
    >
      <FontAwesomeIcon icon={icon} className="mt-[-2px]" />
      {name}
    </NavLink>
  );
}

export default SidebarLink;
