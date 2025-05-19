import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AdminCard({ icon, title, count }) {
    return (
        <div className="flex items-center bg-white border border-[#00000020] shadow-md rounded-xl p-4 mb-4">
            <FontAwesomeIcon icon={icon} className="text-2xl bg-[#00000010] rounded-full p-2" />
            <div className="ml-5">
                <h3 className="font-normal">{title}</h3>
                <p className="font-bold">{count}</p>
            </div>
        </div>
    )
}

export default AdminCard