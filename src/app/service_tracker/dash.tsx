import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';


import '../../components/dash/styles/dash.css';
import "./styles.css";
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';

import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Outlet } from "react-router"

const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function ServiceDash() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const LOGIN_URL = '/auth1';
  const checkValid = async () => {
       

    try {
        const response = await axiosPrivate.post(LOGIN_URL,
            {},
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(JSON.stringify(response?.data));
     
    } catch (err:any) {
      
        console.log(err);
    }
}

  return (
    
  <div>
    <div className='admin-panel' style={{}}>
    <div className="panel">
    <div>
    <span><NavLink to="add">Add New</NavLink></span>
    <span><NavLink to="manage_job">manage job</NavLink></span>
    <span><NavLink to="add">Add New</NavLink></span>
    <span><NavLink to="add">Add New</NavLink></span>
    <span><NavLink to="add">Add New</NavLink></span>
    <span><NavLink to="add">Add New</NavLink></span>
    </div>
    </div>
    

    <div className="container-right">
      <Outlet />
    </div>


    </div>
    </div>




   
  );
}
