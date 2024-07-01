"use client";
import React from "react";
import ExampleComponent from "./components/example-component/example-component";
import { yupExample } from "./utils/validator";
import {
  ControllerRadio,
  ControllerSelect,
  ControllerTextField,
} from "@/core/components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControlLabel, FormGroup, TextField } from "@mui/material";

function Example() {
  // yupExample
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(yupExample),
  });

  const onSubmit = async (value: any) => {
    console.log(value);
  };

  const languages = [
    {
      name: "English",
      id: 1,
    },
    {
      name: "Vietnamese",
      id: 2,
    },
  ];

  return (
    <div className="p-10">
      <form className="w-72" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <ControllerTextField
            placeholder="Nhập Email"
            control={control}
            label="Email"
            multiline
            rows={4}
            name="content"
          />
        </div>
        <div className="mb-2">
          <ControllerSelect
            name="location"
            control={control}
            label="Chọn ngôn ngữ"
            pathLabel="name"
            pathValue="id"
            options={languages}
            placeholder={"Chọn ngôn ngữ"}
          />
        </div>
        <div className="mb-2">
          <ControllerRadio
            name="gender"
            control={control}
            label="Chọn radio"
            pathLabel="name"
            pathValue="id"
            row
            options={languages}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
      <ExampleComponent />
    </div>
  );
}

export default Example;
