import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';


import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './styles/dash.css';
import AccessControl from './admin/AccessControl';
import { Outlet } from "react-router"

const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function AdminPanel() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  

  return (
    
  <div>
    <div className='admin-panel' style={{}}>
  
   
   <div className="panel">
    <div>
    <span><Link 
    to={{
      pathname: "/manage_user",
      search: "?query=string",
      hash: "#hash", 
    }}
    state={{id: 123}}
  
    >Dashboard</Link></span>
    <span><NavLink 
    to="/manage_user">Manage User</NavLink></span>
    <span><NavLink to="/access_control">Access Control</NavLink></span>
    <span><NavLink to="/cockpit_control">Cockpit Control</NavLink></span>
    <span>Staff Listing</span>
    <span>Staff Allowance</span>
    <span>PDF Tracker</span>
    <span>Habit Tracker</span>
    <span>Order Details</span>
    <span>Cancelled Order</span>
    <span>Invoice</span>
    <span>Audit Report</span>
    <span>Kamban Board</span>
    </div>
    </div>

    <div className="container-right">
      {/* <AccessControl/> */}
      <Outlet />
    </div>


    </div>



  </div>
   
  );
}
