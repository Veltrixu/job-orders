import SidebarLink from "./SidebarLink";
import {
  faHome,
  faBellConcierge,
  faFileAlt,
  faCog,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

function Sidebar() {
  return (
    <div className="flex flex-col h-full p-[1rem_0.5rem] shadow-2xl">
      <img src={Logo} alt="" />
      <div>
        <SidebarLink to="/" name="Home" icon={faHome} />
        <SidebarLink to="/dsa" name="Request" icon={faBellConcierge} />
        <SidebarLink to="/asdas" name="Job Orders" icon={faFileAlt} />
        <SidebarLink to="/asdas" name="Settings" icon={faCog} />
      </div>
      <div className="mt-auto mb-0">
        <Link
          to="/auth/login"
          className="flex gap-2 items-center text-[var(--danger)] hover:bg-[var(--light-danger)] p-[0.5rem_1rem] rounded-sm transition-all duration-200 ease"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
