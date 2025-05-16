import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

function Month() {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setCurrentMonth(monthNames[now.getMonth()]);
    setCurrentYear(now.getFullYear());
  }, []);

  return (
    <div className="border-1 border-[#00000050] shadow-sm p-[0.25rem_0.5rem] rounded-sm font-medium flex items-center gap-2">
      <FontAwesomeIcon icon={faCalendarAlt} />
      {`${currentMonth} ${currentYear}`}
    </div>
  );
}

export default Month;
