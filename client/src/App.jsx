import Sidebar from "./component/Sidebar";
import AdminDashboard from "./Dashboard/AdminDashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="md:grid md:grid-cols-[15rem_1fr] h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
