import { useRef, useState, useEffect, FC, useId } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CustomTile from "../../components/common/molecules/tile/tile";
import "./styles/home.css"; // Assuming you have a CSS file for styling

export default function PersonalSpotHome() {
  useEffect(() => {}, []);
  const unique: string = useId();

  const tileMenuItems = [
    {
      title: "Resume",
      icon: "fa-file-edit",
      link: "/personalspot/resume",
    },
    {
      title: "Task Board",
      icon: "fa-tasks",
      link: "/personalspot/taskboard",
    },
    {
      title: "Profile",
      icon: "fa-user",
      link: "/personalspot/profile",
    },
    {
      title: "Settings",
      icon: "fa-cog",
      link: "/personalspot/settings",
    },
  ];

  return (
    <div>
      <h1>Personal Spot Home</h1>
      <div className="tile-menu">
        {tileMenuItems.map((item) => (
          <CustomTile
            key={`${item.title} + ${unique}`}
            tileMenuItem={item}
            width="100px"
            height="100px"
          />
        ))}
      </div>
    </div>
  );
}
