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

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ErrorPage from "./Error";
import Fallback from "./Fallback";
import AuthContext from "./context/AuthProvider";
import Layout from "./Layout";
import Missing from "./Missing";
import Login from "./components/Login";
// import Dashboard from './components/chess';
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import { Link } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import DashboardOld from "./components/DashOld";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Products from "./recoiltest/products";
import Cart from "./recoiltest/cart";

import Orders from "./recoiltest/orders";
import DiscreteSlider from "./recoiltest/slider";
import Items from "./recoiltest/Items";

import Debounce from "./debounce";

// import Dashboard from './components/chess';
import Dashboard from "./components/dash";
import AccessControl from "./components/dash/admin/AccessControl";
import ManageUser from "./components/dash/admin/ManageUser";
import ChessDashboard from "./components/chess";
import FrontPage from "./app/frontpage/home";
import ServiceDash from "./app/service_tracker/dash";
import AddNewJob from "./app/service_tracker/addJob";
import ManageJob from "./app/service_tracker/ManageJobs";
import Counter from "./components/Tests/Counter";
import PersonalSpotHome from "./pages/PersonalSpot/Home";
import PersonalSpotProfile from "./pages/PersonalSpot/Profile";
import PersonalSpotLayout from "./pages/PersonalSpot/layout";
import PersonalSpotResumeManager from "./pages/PersonalSpot/resume-upload/ResumeUploader";
import PersonalSpotResumeEditor from "./pages/PersonalSpot/resume-editor/ResumeEditor";
import ThemeOption from "./components/PersonalSpot/elements/theme-option/ThemeOption";

type DummyProps = {
  number: number;
};

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
  Basic: "basic",
  Chess: "chess",
};

function About() {
  const location = useLocation();

  const va: any = useContext(AuthContext);
  console.log(location);
  return (
    <>
      {console.log(va)}
      {/* <Navigate to="/login" state={{ from: location }} replace /> */}
      <Outlet />
      <p>About {va?.auth?.testVal}</p>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home number={10} />,
    action: async ({ params, request }) => {
      // Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route
      //  console.log(params)
      return "foo";
    },
    loader: ({ params }) => {
      // alert(params.id)
      return null;
    },

    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about/:id",
        element: <About />,
        loader: ({ params }) => {
          alert(params.id);
          return null;
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

type Props = {
  initialCount: number;
};

const App: FC<DummyProps> = ({ number }) => {
  const count: number = 20;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {" "}
        {/* MUI/STYLED/THEMING */}
        <ThemeOption themeName="light">
          {" "}
          {/* CUSTOME/THEMING */}
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/ps" element={<PersonalSpotLayout />}>
                <Route path="home" element={<PersonalSpotHome />} />
                <Route path="profile" element={<PersonalSpotProfile />} />
                <Route path="resume" element={<PersonalSpotResumeManager />} />
                <Route
                  path="resume_editor"
                  element={<PersonalSpotResumeEditor />}
                />
              </Route>
              <Route
                path="test"
                element={<Counter initialCount={count} />}
              ></Route>
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
        </ThemeOption>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
