import SidebarLink from "./SidebarLink";
import {
  faHome,
  faFileAlt,
  faCog,
  faRightFromBracket,
  faUser,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Logo from "../assets/VeltrixuLogo.png";

function Sidebar() {
  return (
    <div className="flex fixed flex-col max-w-[15rem] w-full h-full p-[0_1em] shadow-xl border-r-1 border-[#00000025] bg-white">
      <div className="flex items-center mb-3">
        <img src={Logo} alt="Veltrixu Logo" className="w-18 ml-[-10px]" />
        <h1 className="font-bold text-xl">Veltrixu</h1>
      </div>
      <div>
        <p className="uppercase text-sm text-[#808080] tracking-wide mb-3">Main Menu</p>
        <SidebarLink to="/" name="Dashboard" icon={faHome} />
        <SidebarLink to="/job-orders" name="Job Orders" icon={faFile} />
        <SidebarLink to="/reports" name="Reports" icon={faFileAlt} />
        <SidebarLink to="/users" name="Users" icon={faUser} />
        <SidebarLink to="/settings" name="Settings" icon={faCog} />
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
