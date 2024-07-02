import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import Label from "@/core/components/form/Label";
import { Box, FormHelperText } from "@mui/material";

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.light,
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.primary.main,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

export default function ControllerSlide(props: any) {
  const { control, name, label, sx, hasPercent, ...rest } = props;
  return (
    <div>
      {label && <Label label={label} htmlFor={name} />}
      <Controller
        render={({ field, fieldState: { error } }) => (
          <>
            {hasPercent && (
              <Box sx={{ textAlign: "center", color: "#9a9a9a" }}>
                {field.value}%
              </Box>
            )}
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              onChangeCommitted={(event, value) => {
                field.onChange(value);
              }}
              {...rest}
              {...field}
            />
            {error?.message && (
              <FormHelperText variant="standard" error>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
        control={control}
        name={name}
      />
    </div>
  );
}
