import { useRef, useState, useEffect, FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function PersonalSpotLayout() {
  useEffect(() => {}, []);

  return (
    <div>
      <NavLink to="home">Home</NavLink>
      ||<NavLink to="profile">Profile</NavLink>||
      <NavLink to="resume">Resume</NavLink>||
      <NavLink to="resume_editor">Resume Editor</NavLink>||
      <NavLink to="profile">Settings</NavLink>
      <Outlet />
    </div>
  );
}
