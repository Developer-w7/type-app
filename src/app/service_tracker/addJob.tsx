import { useRef, useState, useEffect, FC } from "react";
import Clock from "react-live-clock";

import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useLogout from "../../hooks/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Outlet } from "react-router";
import "../../components/dash/styles/dash.css";
import { Box, Checkbox, Input, TextField } from "@mui/material";
import CountrySelect from "../../utils/MuiAutoComplete";

const LOGIN_URL = "/auth1";
const LOGOUT_URL = "/logout";

export default function AddNewJob() {
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [employees, setEmployee] = useState([]);

  type Inputs = {
    title: string;
    description: string;
    location: string;
    date: Date;
    employee: any;
    MyCheckbox: boolean;
    country: { code: string; label: string; phone: string };
  };
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      location: "",
      description: "",
      date: new Date(),
      employee: employees,
      MyCheckbox: false,
      country: { code: "AF", label: "Afghanistan", phone: "93" },
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const submitData = async () => {
      try {
        const response = await axiosPrivate.post(
          "http://127.0.0.1:5000/add_job",

          JSON.stringify({
            title: data.title,
            description: data.description,
            location: data.location,
            date: data.date,
            employee_id: data.employee.value,
            MyCheckbox: data.MyCheckbox,
            country: data.country,
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data));
      } catch (err: any) {
        console.log(err);
      }
    };
    submitData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get(
          "http://127.0.0.1:5000/users?page=1&limit=10",
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data));
        const emp = response?.data?.usersList?.map((item: any) => ({
          label: item.name,
          value: item._id,
        }));
        setEmployee(emp);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <span>
        {" "}
        <h4>Add Service Page</h4>
      </span>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <Box
        component="form"
        //   sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        {/* <input defaultValue="test" {...register("example")} /> */}

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        {/* <input {...register("firstName", { required: true, maxLength: 20 })} /> */}
        {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
        {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
        <div>
          <Controller
            name="title"
            control={control}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                fullWidth
                label="Title"
                variant="outlined"
                {...field}
              />
            )}
          />
          {errors.title && <span>This field is required</span>}
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                id="outlined-basic"
                fullWidth
                label="Desc"
                variant="outlined"
                {...field}
              />
            )}
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <Controller
          name="employee"
          control={control}
          render={({ field }) => <Select {...field} options={[...employees]} />}
        />

        <section>
          <label>Date</label>
          <Controller
            control={control}
            name="date"
            render={({ field: { value, ...fieldProps } }) => {
              return (
                <ReactDatePicker
                  {...fieldProps}
                  className="input"
                  placeholderText="Select date"
                  selected={value}
                />
              );
            }}
          />
        </section>
        <section>
          <label>Location</label>
          <CountrySelect control={control} />
        </section>
        <Controller
          name="MyCheckbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />

        <input type="submit" />
      </Box>
    </div>
  );
}
