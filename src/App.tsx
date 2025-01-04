import React, {FC, useContext} from 'react';
// import * as ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
import './App.css';
import Home from './Home';
import ErrorPage from './Error';
import Fallback from './Fallback';
import AuthContext from './context/AuthProvider';
import Layout from './Layout';
import Missing from './Missing';
import Login from './components/Login';
import Dashboard from './components/dash';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './components/Unauthorized';
import { Link } from "react-router-dom";

import { store } from './store/store'
import { Provider } from 'react-redux'

import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import DashboardOld from './components/DashOld';


import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Products from './recoiltest/products';
import Cart from './recoiltest/cart';

import Orders from './recoiltest/orders';
import DiscreteSlider from './recoiltest/slider';
import Items from './recoiltest/Items';


import Debounce from "./debounce";

type DummyProps = {
  number: number
 
}

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function About() 
{
  const location = useLocation();

  const va:any=useContext(AuthContext);
  console.log( location)
  return ( <>
  {console.log(va)}
  {/* <Navigate to="/login" state={{ from: location }} replace /> */}
  <Outlet/><p>About {va?.auth?.testVal}</p></> );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home number={10}/>,
    action:async ({ params, request }) => {  // Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") to your route
    //  console.log(params)
      return "foo";
    },
    loader:({ params }) => {
      // alert(params.id)
     return null
    },
    
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about/:id",
        element: <About />,
        loader:({ params }) => {
          alert(params.id)
         return null
        }
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <About/>,
    errorElement: <ErrorPage />,
  }
]);



declare module '@mui/material/styles' {
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
    mode: 'dark',
  },
});

const App:FC<DummyProps>=({number})=> {
  return (
<Provider store={store}>
<ThemeProvider theme={theme}>
<CssBaseline />
<Routes>
 <Route path="/" element={<Layout />}>
 {/* <Route path="/dash" element={<Dashboard />} /> */}


 <Route path="/login" element={<Login />} />
 {/* <Route path="/test" element={<About/>}/> */}

 <Route path="unauthorized" element={<Unauthorized />} />


 <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/" element={<DashboardOld />} />
 </Route>

 {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/test" element={<DashboardOld />} />
 </Route> */}

 {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/" element={<DashboardOld />} />
 </Route> */}


 {/* <Route element={<About />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tp" element={<DashboardOld />} />
 </Route> */}
 <Route path="*" element={<Missing />} />
 </Route>
</Routes>
</ThemeProvider>
</Provider>

  );
}
// const data:any = ["Apple here", "Mango Here", "apple Farm", "ap farm"];

// const App:FC<DummyProps>=({number})=> {

//   const [fieldText, setFieldText] = React.useState("");
//   const searchText = Debounce(fieldText, 1000);
//   const [searchData, setSearchData] = React.useState([]);

//   React.useEffect(() => {
//     console.log(searchText);

//     let filteredData:any = data.filter((v:any) => v.toLowerCase().includes(searchText));
//     setSearchData(filteredData);
//   }, [searchText]);

//   React.useEffect(() => {
//     setSearchData(data);
//   }, []);

//   return (
//     <RecoilRoot>
//     <div style={{display:'flex',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
    
//     <p style={{marginBottom:50}}>Atoms</p>



//     <input
//           onChange={(v) => {
//             setFieldText(v.target.value);
//           }}
//           value={fieldText}
//           style={{
//             width: "100%",
//             borderRadius: 8,
//             height: 20,
//             padding: 20,
//             fontSize: 30
//           }}
//           type="text"
//           placeholder="search"
//         />
//         <button>Clear Search</button>
      

//       {searchData.map((v, i) => (
//         <div key={i}>{v}</div>
//       ))}


//     </div>
//     </RecoilRoot>
//   )}
export default App;
