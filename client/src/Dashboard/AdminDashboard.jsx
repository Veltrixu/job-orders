import AdminCard from "./AdminCard";
import { faCheck, faClock, faPause, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import DateDisplay from "../component/DateDisplay";
import TableData from "../component/TableData";

function AdminDashboard() {
    return (
        <div className="grid grid-rows-[5rem_1fr] p-[0_1em] h-full">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <DateDisplay />
            </div>
            {/* Main */}
            <div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
                    <AdminCard icon={faClock} title="Pending" count={2} />
                    <AdminCard icon={faSpinner} title="In-Progress" count={2} />
                    <AdminCard icon={faPause} title="On-Hold" count={2} />
                    <AdminCard icon={faTimes} title="Cancelled" count={2} />
                    <AdminCard icon={faCheck} title="Completed" count={2} />
                </div>
                <div>
                    <table className="w-full mt-4 border-collapse overflow-y-hidden">
                        <thead className="text-[var(--label-gray)]">
                            <tr className="border-b-1">
                                <th className="text-left p-[0.25em_0.5em] w-[5%]">No.</th>
                                <th className="text-left p-[0.25em_0.5em] w-[25%]">Requestor</th>
                                <th className="text-left p-[0.25em_0.5em] w-[30%]">Task Description</th>
                                <th className="text-left p-[0.25em_0.5em] w-[5%]">Urgency</th>
                                <th className="text-left p-[0.25em_0.5em] w-[12.5%]">Request Date</th>
                                <th className="text-left p-[0.25em_0.5em] w-[12.5%]">Due Date</th>
                                <th className="text-left p-[0.25em_0.5em] w-[10%]">Status</th>
                                <th className="text-left p-[0.25em_0.5em] w-[5%]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableData jobOrderNo='1' name='Jeff Ivan Mayor' taskDescription='1pc Bakal' urgency="High" requestDate="May 24, 2025" dueDate="May 25, 2025" status='Completed' />
                            <TableData jobOrderNo='2' name='Peter Victor Dawis' taskDescription='1pc Bakal' urgency="Medium" requestDate="May 24, 2025" dueDate="May 25, 2025" status='In-Progress' />
                            <TableData jobOrderNo='3' name='Danziel Jean Lumactod' taskDescription='1pc Bakal' urgency="Low" requestDate="May 24, 2025" dueDate="May 25, 2025" status='Pending' />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard