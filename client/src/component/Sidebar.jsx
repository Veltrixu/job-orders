import SidebarLink from "./SidebarLink";
import {
  faHome,
  faFileAlt,
  faCog,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Logo from "../assets/BlueLogo.png";

function Sidebar() {
  return (
    <div className="flex flex-col h-full p-[1rem_2rem] shadow-2xl border-r-1 border-[#00000010] bg-white">
      <div className="flex items-center mb-3">
        <img src={Logo} alt="Veltrixu Logo" className="w-18 ml-[-10px]" />
        <h1 className="font-bold text-xl tracking-wide">Veltrixu</h1>
      </div>
      <div>
        <p className="uppercase text-sm text-[#808080] tracking-wide mb-3">Main Menu</p>
        <SidebarLink to="/" name="Dashboard" icon={faHome} />
        <SidebarLink to="/dsa" name="Reports" icon={faFileAlt} />
        <SidebarLink to="/asdas" name="Users" icon={faUser} />
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
