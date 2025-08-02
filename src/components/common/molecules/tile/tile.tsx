import { useRef, useState, useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import "./style.css"; // Assuming you have a CSS file for styling

export default function CustomTile({
  tileMenuItem,
  width,
  height,
}: {
  tileMenuItem: { title: string; icon: string; link: string };
  width?: string;
  height?: string;
}) {
  // This component renders a set of tiles based on the provided menu items.
  useEffect(() => {}, []);

  return (
    <div
      onClick={() => console.log(`Clicked ${tileMenuItem.title}`)}
      className="tile-wrapper"
      style={{ width, height }}
    >
      <div className="tile-inner">
        <i className={`fa-solid ${tileMenuItem.icon}`}></i>
        <span>{tileMenuItem.title}</span>
      </div>
    </div>
  );
}
