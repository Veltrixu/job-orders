import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import Month from "./Month";

function Topbar() {
  return (
    <div className="shadow-xl md:h-15 flex justify-between items-center px-5">
      <Month />
      <div>Jeff Ivan Mayor</div>
    </div>
  );
}

export default Topbar;
