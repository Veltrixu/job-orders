const STATUS_COLORS = {
  Pending: "bg-amber-200",
  "In-Progress": "bg-blue-200",
  "On-Hold": "bg-slate-200",
  Cancelled: "bg-red-200",
  Completed: "bg-emerald-200",
};

const URGENCY_COLORS = {
  High: "bg-red-200",
  Medium: "bg-yellow-200",
  Low: "bg-green-200",
};

function TableData({
  jobOrderNo,
  name,
  taskDescription,
  urgency,
  requestDate,
  dueDate,
  status,
}) {
  const bgColor = STATUS_COLORS[status] || "bg-gray-500";
  const urgencyBg = URGENCY_COLORS[urgency] || "bg-gray-500";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (action) => {
    console.log(`Action: ${action} for Job Order: ${jobOrderNo}`);
    setIsDropdownOpen(false);
    // Add your action handlers here
  };
}

export default TableData;
