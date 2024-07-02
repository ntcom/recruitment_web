import { ControllerTextField } from "@/core/components/form";
import { Button } from "@mui/material";
import React from "react";
import ControllerSlide from "../controller-slide";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { skillValidator } from "../../utils/validator";

function FormSkill() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(skillValidator),
  });

  const percent = watch("percent");
  return (
    <div className="app-card p-[60px_70px_40px] mb-[70px]">
      <form className="grid grid-cols-2 gap-6">
        <h2 className="app-heading-2 ">Skill</h2>
        <div className="flex justify-end items-center gap-6">
          <Button>Edit</Button>
          <Button>Add New</Button>
        </div>
        <div className="mb-2">
          <ControllerTextField
            size="small"
            placeholder=""
            control={control}
            label="Title"
            name="title"
          />
        </div>
        <div className="mb-2">
          <ControllerSlide
            hasPercent
            control={control}
            label="Percentage"
            name="percent"
          />
        </div>
      </form>
    </div>
  );
}

export default FormSkill;
