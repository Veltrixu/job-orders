import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

const STATUS_COLORS = {
    'Pending': 'bg-amber-200',
    'In-Progress': 'bg-blue-200',
    'On-Hold': 'bg-slate-200',
    'Cancelled': 'bg-red-200',
    'Completed': 'bg-emerald-200'
};

const URGENCY_COLORS = {
    'High': 'bg-red-200',
    'Medium': 'bg-yellow-200',
    'Low': 'bg-green-200'
}

function TableData({ jobOrderNo, name, taskDescription, urgency, requestDate, dueDate, status }) {
    const bgColor = STATUS_COLORS[status] || 'bg-gray-500';
    const urgencyBg = URGENCY_COLORS[urgency] || 'bg-gray-500';
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleIconClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleOptionClick = (action) => {
        console.log(`Action: ${action} for Job Order: ${jobOrderNo}`)
        setIsDropdownOpen(false)
        // Add your action handlers here
    }

    return (
        <tr className="hover:bg-gray-200 transition-colors duration-200 ease">
            <td className="text-[0.9em] p-[0.5em_0.75em]">{jobOrderNo}</td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">{name}</td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">{taskDescription}</td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">
                <span className={`${urgencyBg} w-fit rounded-md px-2 py-1 text-sm`}>
                    {urgency}
                </span>
            </td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">{requestDate}</td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">{dueDate}</td>
            <td className="text-[0.9em] p-[0.5em_0.75em]">
                <span className={`${bgColor} w-fit rounded-md px-2 py-1 text-sm`}>
                    {status}
                </span>
            </td>
            <td className="text-[0.9em] p-[0.5em_0.75em] relative" ref={dropdownRef}>
                <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="border border-[#00000020] p-[0.25rem] rounded-sm cursor-pointer hover:bg-gray-100"
                    onClick={handleIconClick}
                />

                {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[120px]">
                        <ul className="py-1">
                            <li>
                                <button
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => handleOptionClick('edit')}
                                >
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => handleOptionClick('view')}
                                >
                                    View Details
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                    onClick={() => handleOptionClick('duplicate')}
                                >
                                    Duplicate
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 text-red-600"
                                    onClick={() => handleOptionClick('delete')}
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </td>
        </tr>
    )
}

export default TableData