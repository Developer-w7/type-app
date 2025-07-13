import React from "react";
import _ from "lodash/fp";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm, Controller } from "react-hook-form";
import type { Control } from "react-hook-form";
import countryToFlag from "./countryToFlag";
import countries from "./countries";



import type {
    NestedValue,
    SubmitHandler,
    DefaultValues
  } from "react-hook-form";


interface ICountry {
  code: string;
  label: string;
  phone: string;
}

type FormValues = {

  title: string
  description: string
  location: string
  date: Date
  employee: { label: string; value: string }
  MyCheckbox: boolean
  country: { code: string; label: string; phone: string };
  };

export default function CountrySelect({
  control
}: {
  control: Control<FormValues>;
}) {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={countries}
          getOptionLabel={(option) => option.label}
          renderGroup={(option:any) => (
            <span>
              {countryToFlag(option.code)}
              {option.label}
            </span>
          )}
          isOptionEqualToValue={(option: ICountry, value: ICountry) =>
            _.isEqual(option, value)
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
            />
          )}
          onChange={(_, data) => field.onChange(data)}
        />
      )}
      name="country"
      control={control}
    />
  );
}


