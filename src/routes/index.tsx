import React, { FC, useContext } from "react";
// import * as ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";

import "../App.css";
import Layout from "../Layout";
import Missing from "../Missing";
import Login from "../components/Login";
// import Dashboard from '../components/chess';
import RequireAuth from "../components/RequireAuth";

// import Dashboard from '../components/chess';
import Dashboard from "../components/dash";
import AccessControl from "../components/dash/admin/AccessControl";
import ManageUser from "../components/dash/admin/ManageUser";
import ChessDashboard from "../components/chess";
import FrontPage from "../app/frontpage/home";
import ServiceDash from "../app/service_tracker/dash";
import AddNewJob from "../app/service_tracker/addJob";
import ManageJob from "../app/service_tracker/ManageJobs";
import Counter from "../components/Tests/Counter";
import PersonalSpotHome from "../pages/PersonalSpot/Home";
import PersonalSpotProfile from "../pages/PersonalSpot/Profile";
import PersonalSpotLayout from "../pages/PersonalSpot/layout";
import PersonalSpotResumeManager from "../pages/PersonalSpot/resume-upload/ResumeUploader";
import PersonalSpotResumeEditor from "../pages/PersonalSpot/resume-editor/ResumeEditor";

type DummyProps = {
  number?: number;
};

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
  Basic: "basic",
  Chess: "chess",
};

const Router: FC<DummyProps> = () => {
  const count: number = 20;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/ps" element={<PersonalSpotLayout />}>
          <Route path="home" element={<PersonalSpotHome />} />
          <Route path="profile" element={<PersonalSpotProfile />} />
          <Route path="resume" element={<PersonalSpotResumeManager />} />
          <Route path="resume_editor" element={<PersonalSpotResumeEditor />} />
        </Route>
        <Route path="test" element={<Counter initialCount={count} />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
        <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
          <Route path="/service" element={<ServiceDash />}>
            <Route path="add" element={<AddNewJob />} />
            <Route path="manage_job" element={<ManageJob />} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
          <Route path="/" element={<FrontPage />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Chess]} />}>
          <Route path="/chess" element={<ChessDashboard />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route path="manage_user" element={<ManageUser />} />
          <Route path="access_control" element={<AccessControl />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default Router;
