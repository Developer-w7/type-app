import { useRef, useState, useEffect, FC } from 'react';
import Clock from 'react-live-clock';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';


import { Link, useNavigate, useLocation } from 'react-router-dom';

import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import { useDispatch, useSelector } from 'react-redux';

import '../../components/dash/styles/dash.css';
import { RootState } from '../../store/store';

const LOGIN_URL = '/auth1';
const LOGOUT_URL = '/logout';


export default function ManageJob() {
  const axiosPrivate = useAxiosPrivate();
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  let data = useLocation();
    //TData
type User = {
  title: string
  createdAt: string
  description: string
  employee_id: string
  location: string
  country: string
  date: Date
}
const fallbackData:User[]=[]

const columns = [
  {
    header: 'title',
    accessorKey: 'title',
    size: 250,

  },
  {
    header: 'employee_id',
    accessorKey: 'employee_id',
    minWidth: 50,
    maxWidth: 50,
  },
  {
    header: 'location',
    accessorKey: 'location',
    minWidth: 50,
    maxWidth: 50,
  },
  {
    header: 'country',
    accessorKey: 'country',
    minWidth: 50,
    maxWidth: 50,
  },

  {
    header: 'date',
    accessorKey: 'date',
    minWidth: 500,
    maxWidth: 500,
  },

  {
    header: 'createdAt',
    accessorKey: 'createdAt',
    minWidth: 500,
    maxWidth: 500,
  },
  {
    header: 'description',
    accessorKey: 'description',
    minWidth: 500,
    maxWidth: 500,
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


    fetch('http://localhost:5000/jobs?page=1&limit=5').then(response =>response.json()).then((data:any)=>{
      console.log(data)
      let list:any =[];
      data.jobsList.map((item:any) => {
        
   list.push({
          title: item.title,
          createdAt: item.createdAt,
          employee_id: item.employee_id,
          location: item.location,
          country: item.country.label,
          date: item.date,
          description: item.description
   })

      })

      setUserData([...list]);
   
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