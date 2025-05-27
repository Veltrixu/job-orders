const STATUS_COLORS = {
  Pending: "bg-amber-400",
  "In-Progress": "bg-blue-400",
  "On-Hold": "bg-slate-400",
  Cancelled: "bg-red-400",
  Completed: "bg-emerald-400",
};

function AdminCard({ title = "Unknown", count = 0 }) {
  const bgColor = STATUS_COLORS[title] || "bg-gray-500";

  return (
    <div className="flex items-center bg-white border border-black/10 drop-shadow-sm rounded-xl p-4 mb-4">
      <div
        className={`${bgColor} rounded-xl w-12 h-12 flex items-center justify-center`}
      >
        <span className="text-white text-xl">{title[0]}</span>
      </div>
      <div className="ml-5">
        <h3 className="font-normal">{title}</h3>
        <p className="font-bold">{count}</p>
      </div>
    </div>
  );
}

export default AdminCard;
