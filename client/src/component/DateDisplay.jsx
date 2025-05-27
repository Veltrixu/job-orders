function DateDisplay() {
  const now = new Date();

  const months = [
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

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const formattedDate = `${day}, ${month} ${year}`;

  return (
    <div className="flex items-center">
      <p className="text-sm">{formattedDate}</p>
    </div>
  );
}

export default DateDisplay;
