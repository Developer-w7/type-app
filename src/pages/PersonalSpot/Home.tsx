import { useRef, useState, useEffect, FC } from "react";
import { Outlet } from "react-router-dom";

export default function PersonalSpotHome() {
  useEffect(() => {}, []);

  return (
    <div>
      <p>Personalspot Home</p>
      <div className="container-right">
        <Outlet />
      </div>
    </div>
  );
}
