import AdminCard from "./AdminCard";
import { Link, NavLink, Outlet } from "react-router-dom";
import { faCheck, faClock, faPause, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import DateDisplay from "../../component/DateDisplay";
import TableData from "../../component/TableData";

function JobOrders() {
    const navLinks = [
        { to: "/job-orders", label: "All Orders", end: true },
        { to: "/job-orders/pending", label: "Pending Orders" },
        { to: "/job-orders/in-progress", label: "In-Progress" },
        { to: "/job-orders/on-hold", label: "On-Hold" },
        { to: "/job-orders/cancelled", label: "Cancelled" },
        { to: "/job-orders/completed", label: "Completed" }
    ];

    const statusCards = [
        { icon: faClock, title: "Pending", count: 2 },
        { icon: faSpinner, title: "In-Progress", count: 2 },
        { icon: faPause, title: "On-Hold", count: 2 },
        { icon: faTimes, title: "Cancelled", count: 2 },
        { icon: faCheck, title: "Completed", count: 2 }
    ];

    return (
        <div className="grid grid-rows-[5rem_1fr] p-[0_1em] h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <DateDisplay />
            </div>

            {/* Main Content */}
            <div>
                {/* Status Cards */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                    {statusCards.map((card, index) => (
                        <AdminCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            count={card.count}
                        />
                    ))}
                </div>

                {/* Navigation and Content */}
                <div className="space-y-4">
                    {/* Navigation Header */}
                    <div className="flex items-center justify-between">
                        {/* Navigation Links */}
                        <nav className="flex flex-wrap gap-2">
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.to}
                                    end={link.end}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md transition-colors duration-200 ${isActive
                                            ? 'text-blue-500'
                                            : ''
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Add Order Button */}
                        <Link
                            to="#"
                            className="rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 p-[0.5em_0.75em]"
                        >
                            Add Order
                        </Link>
                    </div>

                    {/* Content Outlet */}
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobOrders;