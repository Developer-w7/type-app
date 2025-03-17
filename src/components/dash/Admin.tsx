import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';


import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useLogout from '../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './styles/dash.css';


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
    <span>Access Control</span>
    <span>Cockpit Control</span>
    <span>Staff Listing</span>
    <span>Staff Allowance</span>
    <span>Order Details</span>
    <span>Cancelled Order</span>
    <span>Invoice</span>
    <span>Audit Report</span>
    <span>Kamban Board</span>
    </div>
    </div>

    <div className="container-right">

      <p>Data goes here</p>
    </div>


    </div>



  </div>
   
  );
}
