import Sidebar from "./component/Sidebar";
import AdminDashboard from "./Admin/AdminDashboard";

function App() {
  return (
    <div className="md:grid md:grid-cols-[15rem_1fr] h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <AdminDashboard />
      </div>
    </div>
  );
}

export default App;
