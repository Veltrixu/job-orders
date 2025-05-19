import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DateDisplay() {
    const now = new Date();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = `${day}, ${month} ${year}`;

    return (
        <div className="flex items-center">
            <p className="text-sm">{formattedDate}</p>
            <FontAwesomeIcon icon={faCalendar} className="ml-3 mt-[-2px] bg-[#00000010] rounded-full p-2" />
        </div>
    );
}

export default DateDisplay;
