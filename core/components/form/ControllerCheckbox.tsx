import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Props<T extends FieldValues>
  extends Omit<FormControlLabelProps, "control"> {
  control: Control<T>;
  name: FieldPath<T>;
  onChangeSelect?: (value: boolean) => void;
}

const ControllerCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, onChangeSelect, ...rest } = props;

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <FormControl error={Boolean(error)}>
          <FormControlLabel
            {...rest}
            {...field}
            onChange={(event) => {
              const checked = (event.target as HTMLInputElement).checked;
              field.onChange(checked);
              if (onChangeSelect) {
                onChangeSelect(checked);
              }
            }}
            control={<Checkbox checked={field.value} />}
          />
          {error?.message && (
            <FormHelperText variant="standard">{error.message}</FormHelperText>
          )}
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default ControllerCheckbox;
