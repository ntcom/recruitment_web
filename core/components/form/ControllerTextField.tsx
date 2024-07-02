import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import Label from "./Label";
import { FormHelperText } from "@mui/material";

interface Props<T extends FieldValues> extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
}

const ControllerTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, placeholder, disabled, label, id, size, ...rest } =
    props;
  console.log("🚀 ~ size:", size);

  return (
    <div>
      {label && <Label label={label} htmlFor={name} />}
      <Controller
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              id={name}
              fullWidth
              error={Boolean(error)}
              placeholder={disabled ? void 0 : placeholder}
              disabled={disabled}
              size={size}
              {...field}
              {...rest}
            />
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

export default ControllerTextField;
