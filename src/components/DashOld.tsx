import { useRef, useState, useEffect, FC } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

 import axios from '../api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useLogout from '../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { decrement, increment } from '../store/counter/counter';





const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function DashboardOld() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
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


  //   const logout = async () => {
       

  //     try {
  //         const response = await axios.post(LOGOUT_URL,
  //             {},
  //             {
  //                 headers: { 'Content-Type': 'application/json' },
  //                 withCredentials: true
  //             }
  //         );
  //         console.log(JSON.stringify(response?.data));
       
  //     } catch (err:any) {
        
  //         console.log(err);
  //     }
  // }

  return (
    <div id="dash-page">
      <p>Dashboard</p>
      <button onClick={()=>checkValid()}>Check User</button>
      <button onClick={()=>logout()}>User Logout</button>
    
      <Link to="/ds2">home</Link>
      <Link to="/">home</Link>


      {/* Redux */}

      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </div>
  );
}
