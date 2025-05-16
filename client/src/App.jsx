import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";

function App() {
  return (
    <div className="md:grid md:grid-cols-[12rem_1fr] h-screen">
      <div>
        <Sidebar />
      </div>
      <div>
        <Topbar />
      </div>
    </div>
  );
}

export default App;
