import React, { useState, useEffect } from "react";

function MouseCords() {
  const [strXY, updateXY] = useState("0,0");

  const displayXY = (e) => {
    let newStrXY = e.pageX + "," + e.pageY;
    updateXY(newStrXY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", displayXY);

    return () => {
      window.removeEventListener("mousemove", displayXY);
    };
  });

  return (
    <div>
      <h1>{strXY}</h1>
    </div>
  );
}

export default MouseCords;
