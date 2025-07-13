import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useLogout from '../../../hooks/useLogout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../styles/dash.css';


const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function ManageUser() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  let data = useLocation();
    //TData
type User = {
  name: string
  age: number
  visits: number
  progress: number
  status: string
}
const fallbackData:User[]=[]

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
    size: 250,

  },
  {
    header: 'Email',
    accessorKey: 'email',
    minWidth: 50,
    maxWidth: 50,
  },
  {
    header: 'Password',
    accessorKey: 'password',
    minWidth: 50,
    maxWidth: 50,
  },
  {
    header: 'Role',
    accessorKey: 'role',
    minWidth: 50,
    maxWidth: 50,
  },

  {
    header: 'Created At',
    accessorKey: 'createdAt',
    minWidth: 500,
    maxWidth: 500,
  },
  {
    header: 'Token Created At',
    accessorKey: 'createdAt',
    minWidth: 50,
    maxWidth: 50,
  },
  {
    header: 'Account Status',
    accessorKey: 'status',
    minWidth: 50,
    maxWidth: 50,
  }
]

  const [userData, setUserData] = useState<User[]>([...fallbackData])
  // console.log(data.state.id);
  // Columns and data are defined in a stable reference, will not cause infinite loop!
    // const table = useReactTable({
    //   columns,
    //   userData ?? fallbackData
    // });


      // Columns and data are defined in a stable reference, will not cause infinite loop!
      const table = useReactTable({
        data:userData,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })



  useEffect(() =>{


    fetch('http://localhost:5000/users?page=1&limit=5').then(response =>response.json()).then((data:any)=>{
      
      let list:any =[];
      data.usersList.map((item:any) => {
        
   list.push({
    "name": item.name,
    "email": item.email,
    "password": item.password,
    "createdAt": item.createdAt,
    "role": item.role,
    "age": 33,
    "visits": 100,
    "progress": 50,
    "status": "Active"
   })

      })

      setUserData([...list]);
      // setUserData([
      //   {
      //     "name": "Tanner1",
      //     "age": 33,
      //     "visits": 100,
      //     "progress": 50,
      //     "status": "Married"
      //   },
      //   {
      //     "name": "Kevin2",
      //     "age": 27,
      //     "visits": 200,
      //     "progress": 100,
      //     "status": "Single"
      //   }
      // ])
    })
    
    },[])

  useEffect(() =>{
    console.log(userData)
  },[userData])

  return (
    <>
  <div className='top-crumb'> 
      <h4 className='m-0'>User Table</h4>
  </div>
  <div className='inner-container'>
 

    <table>

    <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}
                style={{ width: `${header.getSize()}px` }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                 <h4>{flexRender(cell.column.columnDef.cell, cell.getContext())}</h4> 
                </td>
              ))}
            </tr>
          ))}
        </tbody>
    </table>

    </div>


</>
 
   
  );
}