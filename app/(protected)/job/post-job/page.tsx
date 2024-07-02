"use client";
import React from "react";
import {
  ControllerRadio,
  ControllerSelect,
  ControllerTextField,
} from "@/core/components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { yupExample } from "../utils/validator";

function PostJob() {
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

  const jobs = [
    {
      name: "Full Time",
      id: 1,
    },
    {
      name: "Part Time",
      id: 2,
    },
    {
      name: "Intern",
      id: 3,
    },
  ];

  return (
    <div className="container">
      <div className="app-card p-[60px_70px_40px]">
        <h2 className="app-heading text-center mb-[60px]">Post Your Job</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-2">
              <ControllerTextField
                placeholder="UI/UX Design"
                control={control}
                label="Job Title"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                placeholder="IT & Technology"
                control={control}
                label="Job Category"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                placeholder="Winbrans.com"
                control={control}
                label="Company Name"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                placeholder="Winbrans.com"
                control={control}
                label="Company Name"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                placeholder="10"
                control={control}
                label="Vacancies"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                placeholder="210 - 27 Quadra, Market Street, Victoria Canada"
                control={control}
                label="Location"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerRadio
                name="gender"
                control={control}
                label="Job Type"
                pathLabel="name"
                pathValue="id"
                row
                sx={{ gap: "20px" }}
                options={jobs}
              />
            </div>
          </div>
          <div className="my-[30px]">
            <ControllerTextField
              placeholder=""
              control={control}
              multiline
              rows={8}
              label="Job Description"
              name="content"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
