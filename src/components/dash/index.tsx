import { useRef, useState, useEffect, FC } from "react";
import Clock from "react-live-clock";

import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useLogout from "../../hooks/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./styles/dash.css";
import Dress from "./Dress";
import AdminPanel from "./Admin";


const LOGIN_URL = "/auth1";
const LOGOUT_URL = "/logout";

export default function Dashboard() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // States
  const [productData, setProducts] = useState(null);

  useEffect(() => {
    try{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data)=>{
        setProducts(data);
      });
    }
    catch(e){
      console.log(e)
    }
    
  }, []);


  useEffect(() => {
      // console.log(productData) 
  }, [productData]);





  return (
    <div>
      <div className="top-bar" style={{}}>
        <div>
          <span>
            <h3>Dash</h3>
          </span>
        </div>
        <div>
          <span style={{}}>
            <h3>
              <Clock format={"h:mm:ssa"} ticking={true} />
            </h3>
          </span>
        </div>
      </div>
      {/* <Dress productData={productData}/> */}
     <AdminPanel/>
    </div>
  );
}
