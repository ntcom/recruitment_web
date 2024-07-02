"use client";
import React from "react";
import {
  ControllerRadio,
  ControllerSelect,
  ControllerTextField,
} from "@/core/components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { yupExample } from "../utils/validator";
import ControllerSlide from "../components/controller-slide";
import FormSkill from "../components/form-session/FormSkill";
import FormSocial from "../components/form-session/FormSocial";

function PostJob() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(yupExample),
  });

  const onSubmit = async (value: any) => {
    console.log(value);
  };

  const gebder = [
    {
      name: "Male",
      id: 1,
    },
    {
      name: "Female",
      id: 2,
    },
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="app-card p-[60px_70px_40px] mb-[70px]">
          <h2 className="app-heading-2 mb-[60px]">Basic Infomation</h2>
          <div className="flex gap-[35px] mb-[40px]">
            <Button type="button">Upload Cover Photo</Button>
            <Button type="button">Upload Your CV</Button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  control={control}
                  label="Your Name"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  control={control}
                  label="Your Email"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  type="date"
                  control={control}
                  label="Date Of Birth"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  control={control}
                  label="Your Phone"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  control={control}
                  label="Job Title"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerTextField
                  size="small"
                  placeholder=""
                  control={control}
                  label="Address:"
                  name="content"
                />
              </div>
              <div className="mb-2">
                <ControllerRadio
                  name="gender"
                  control={control}
                  label="Gender"
                  pathLabel="name"
                  pathValue="id"
                  row
                  sx={{ gap: "20px" }}
                  options={gebder}
                />
              </div>
            </div>
            <div className="my-[30px]">
              <ControllerTextField
                placeholder=""
                control={control}
                multiline
                rows={6}
                label="Description"
                name="content"
              />
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </div>
        {/* education */}
        <div className="app-card p-[60px_70px_40px] mb-[70px]">
          <div className="grid grid-cols-2 gap-6">
            <h2 className="app-heading-2 ">Education</h2>
            <div className="flex justify-end items-center">
              <Button>Add Education</Button>
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder=""
                control={control}
                label="Title"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder=""
                control={control}
                label="Degree"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder=""
                control={control}
                label="Institute"
                name="content"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder=""
                control={control}
                label="Year"
                name="content"
              />
            </div>
          </div>
        </div>
        <FormSkill />
        <FormSocial />
      </form>
    </div>
  );
}

export default PostJob;
