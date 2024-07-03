"use client";
import { ControllerTextField } from "@/core/components/form";
import { Button, Checkbox } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactValidator } from "./utils/validator";

function Contact() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(contactValidator),
  });

  return (
    <div className="container mt-[100px]">
      <div className="w-full lg:w-[970px] mx-auto mb-[70px]">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder="Your Full Name"
                control={control}
                name="fullname"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder="Your Email"
                control={control}
                name="email"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder="Your Phone"
                control={control}
                name="phone"
              />
            </div>
            <div className="mb-2">
              <ControllerTextField
                size="small"
                placeholder="Subject"
                control={control}
                name="subject"
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <ControllerTextField
              placeholder="Job Description"
              control={control}
              multiline
              rows={6}
              name="description"
            />
          </div>
          <p className="mt-[30px]">
            <Checkbox/>
            Accept {' '}
            <span className="text-primary-main hover:text-black cursor-pointer">
              Terms & Conditions {' '}
            </span>
            And {' '}
            <span className="text-primary-main hover:text-black cursor-pointer">
             {' '} Privacy Policy.
            </span>
          </p>
          <div className="flex justify-center mt-[20px]">
            <button className="app-button-main p-[14px_45px]">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
