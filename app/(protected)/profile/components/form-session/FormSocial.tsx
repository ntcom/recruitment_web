import { ControllerTextField } from "@/core/components/form";
import { Button } from "@mui/material";
import React from "react";
import ControllerSlide from "../controller-slide";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { skillValidator, socialValidator } from "../../utils/validator";

function FormSocial() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(socialValidator),
  });

  return (
    <div className="app-card p-[60px_70px_40px] mb-[70px]">
      <form className="grid grid-cols-2 gap-6">
        <h2 className="app-heading-2 ">Social Links</h2>
        <div className="flex justify-end items-center gap-6">
          <Button>Edit</Button>
          <Button>Add New</Button>
        </div>
        <div className="mb-2">
          <ControllerTextField
            size="small"
            placeholder=""
            control={control}
            label="Facebook"
            name="title"
          />
        </div>
        <div className="mb-2">
          <ControllerTextField
            size="small"
            control={control}
            label="Instagram"
            name="percent"
          />
        </div>
        <div className="mb-2">
          <ControllerTextField
            size="small"
            control={control}
            label="Linedin"
            name="percent"
          />
        </div>
        <div className="mb-2">
          <ControllerTextField
            size="small"
            control={control}
            label="Dribbble"
            name="percent"
          />
        </div>
      </form>
    </div>
  );
}

export default FormSocial;
