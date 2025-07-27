import { useRef, useState, useEffect, FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PersonalSpotLayout() {
  useEffect(() => {}, []);

  return (
    <div>
      <NavLink to="home">Home</NavLink>
      ||<NavLink to="profile">Profile</NavLink>||
      <NavLink to="profile">Resume</NavLink>||
      <NavLink to="profile">Settings</NavLink>
      <Outlet />
    </div>
  );
}
