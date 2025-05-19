import AdminCard from "./AdminCard";
import { faCheck, faClock, faPause, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import DateDisplay from "../component/DateDisplay";

function AdminDashboard() {
    return (
        <div className="grid grid-rows-[5rem_1fr] p-[1rem_3rem] h-full">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl">Hello, Admin</h1>
                <DateDisplay />
            </div>
            {/* Main */}
            <div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
                    <AdminCard icon={faClock} title="Pending" count={2} />
                    <AdminCard icon={faSpinner} title="In-Progress" count={2} />
                    <AdminCard icon={faPause} title="On-Hold" count={2} />
                    <AdminCard icon={faTimes} title="Cancelled" count={2} />
                    <AdminCard icon={faCheck} title="Complete" count={2} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard