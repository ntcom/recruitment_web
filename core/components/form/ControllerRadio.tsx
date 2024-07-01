import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import type { RadioGroupProps } from "@mui/material/RadioGroup";
import RadioGroup from "@mui/material/RadioGroup";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import Label from "./Label";

interface Option {
  value: number;
  label: string;
}

interface Props<T extends FieldValues>
  extends Omit<FormControlLabelProps, "control" | "label"> {
  control: Control<T>;
  name: FieldPath<T>;
  options: any[];
  pathValue: string;
  label?: string;
  pathLabel: string;
  row?: RadioGroupProps["row"];
  onChangeSelect?: (value: number) => void;
}

const ControllerRadio = <T extends FieldValues>(props: Props<T>) => {
  const {
    control,
    name,
    options,
    row,
    pathLabel,
    label,
    pathValue,
    onChangeSelect,
    ...rest
  } = props;

  return (
    <div>
      {label && <Label label={label} htmlFor={name} />}
      <Controller
        render={({ field, fieldState: { error } }) => (
          <>
            <RadioGroup
              row={row}
              {...field}
              onChange={(event) => {
                const valueAsNumber = Number(event.target.value);
                field.onChange(valueAsNumber);
                if (onChangeSelect) {
                  onChangeSelect(valueAsNumber);
                }
              }}
            >
              {options.map((item) => {
                const value = item[pathValue];
                const label = item[pathLabel];
                return (
                  <FormControlLabel
                    {...rest}
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                );
              })}
            </RadioGroup>
            {error?.message && (
              <FormHelperText variant="standard" error>
                {error.message}
              </FormHelperText>
            )}
          </>
        )}
        name={name}
        control={control}
      />
    </div>
  );
};

export default ControllerRadio;
