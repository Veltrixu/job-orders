import React from 'react'
import TableData from '../../component/TableData'

function InProgressOrders() {
    return (
        <table className="w-full mt-4 border-collapse overflow-y-hidden">
            <thead className="text-[var(--label-gray)]">
                <tr className="border-b-1 border-[#00000030]">
                    <th className="text-left p-[0.25em_0.5em] w-[5%]">No.</th>
                    <th className="text-left p-[0.25em_0.5em] w-[25%]">Requestor</th>
                    <th className="text-left p-[0.25em_0.5em] w-[25%]">Task Description</th>
                    <th className="text-left p-[0.25em_0.5em] w-[5%]">Urgency</th>
                    <th className="text-left p-[0.25em_0.5em] w-[12.5%]">Request Date</th>
                    <th className="text-left p-[0.25em_0.5em] w-[12.5%]">Due Date</th>
                    <th className="text-left p-[0.25em_0.5em] w-[15%]">Status</th>
                    <th className="text-left p-[0.25em_0.5em] w-[5%]"></th>
                </tr>
            </thead>
            <tbody>
                <TableData jobOrderNo='2' name='Peter Victor Dawis' taskDescription='1pc Bakal' urgency="Medium" requestDate="May 24, 2025" dueDate="May 25, 2025" status='In-Progress' />
                <TableData jobOrderNo='3' name='Danziel Jean Lumactod' taskDescription='1pc Bakal' urgency="Low" requestDate="May 24, 2025" dueDate="May 25, 2025" status='In-Progress' />
            </tbody>
        </table>
    )
}

export default InProgressOrders