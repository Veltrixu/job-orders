import { NavLink } from "react-router-dom";

function SidebarLink({ name, to }) {
  return (
    <NavLink
      to={to}
      className="flex gap-2 items-center mr-auto ml-0 text-[#00000075] text-[0.9rem] p-[0.5rem_1rem] rounded-md hover:bg-[#00000010] transition-all duration-100 ease-in"
    >
      {name}
    </NavLink>
  );
}

export default SidebarLink;
