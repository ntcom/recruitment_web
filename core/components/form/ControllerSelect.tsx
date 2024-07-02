import { Controller, FieldValues } from "react-hook-form";
// mui
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Label from "./Label";

interface Props extends FieldValues {
  label: string;
  pathValue: string;
  pathLabel: string;
  options: any[];
}

const ControllerSelect = (props: Props) => {
  const {
    control,
    name,
    placeholder,
    disabled,
    interpolation,
    pathValue,
    pathLabel,
    label,
    options,
    ...rest
  } = props;
  return (
    <div className="w-full">
      {label && <Label label={label} htmlFor={name} />}
      <Controller
        render={({ field, fieldState: { error } }) => (
          <>
            <Select
              id={name}
              fullWidth
              error={Boolean(error)}
              placeholder={disabled ? void 0 : placeholder}
              disabled={disabled}
              {...field}
              {...rest}
              labelId="demo-simple-select-label"
            >
              {options.map((item: any, index: number) => (
                <MenuItem key={index} value={item[pathValue] || item}>
                  {item[pathLabel] || item}
                </MenuItem>
              ))}
            </Select>
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

export default ControllerSelect;
