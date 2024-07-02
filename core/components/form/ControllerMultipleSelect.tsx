import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import type { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import Select from "@mui/material/Select";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Option extends FieldValues {
  id: number;
}

interface Label extends Option {
  name: string;
}

interface Props<T extends FieldValues, O extends Option[]>
  extends Omit<SelectProps<number[]>, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  options: O;
  selector: (option: O[number]) => string;
  onChangeOption?: (ids: number[]) => Promise<void> | void;
  getOptionDisabled?: (option: O[number]) => boolean;
  placeholder: string;
  noOptionsText?: string;
}

const ControllerMultipleSelect = <T extends FieldValues, O extends Option[]>(
  props: Props<T, O>
) => {
  const {
    control,
    name,
    options,
    selector,
    onChangeOption,
    placeholder,
    disabled,
    label,
    noOptionsText,
    getOptionDisabled,
    ...rest
  } = props;

  const labels = options.reduce<Record<number, Label>>((acc, option) => {
    const { id } = option;
    acc[id] = { id, name: selector(option) };
    return acc;
  }, {});

  return (
    <Controller
      render={({ field: { value, ...others }, fieldState: { error } }) => (
        <FormControl fullWidth size="small" error={Boolean(error)}>
          {label && <InputLabel id={`${name}-label`}>{label}</InputLabel>}
          <Select<number[]>
            id={name}
            label={label}
            labelId={`${name}-label`}
            disabled={disabled}
            {...(disabled && {
              IconComponent: () => null,
            })}
            multiple
            renderValue={(value) => {
              const values = (value || []).filter((value) => value >= 0);

              if (!values.length) {
                return <>{placeholder}</>;
              }

              return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {values.map((value) => (
                    <Chip
                      key={value}
                      label={labels[value].name}
                      sx={{ borderRadius: "revert" }}
                    />
                  ))}
                </Box>
              );
            }}
            {...others}
            {...rest}
            value={
              Array.isArray(value) &&
              value.length &&
              value.every((id: number) => id in labels)
                ? value
                : [-1]
            }
            onChange={(event: SelectChangeEvent<number[]>) => {
              if (Array.isArray(event.target.value)) {
                // Remove -1 from values
                event.target.value = event.target.value.filter(
                  (value) => value !== -1
                );
                others.onChange(event);
                if (onChangeOption) {
                  onChangeOption(event.target.value);
                }
              }
            }}
          >
            {options.length > 0 && placeholder && (
              <MenuItem value={-1} disabled>
                {placeholder}
              </MenuItem>
            )}
            {!options.length && (
              <MenuItem value={-1} disabled>
                {noOptionsText || "Trống"}
              </MenuItem>
            )}
            {options.map((option, i) => {
              const { id } = option;
              const disabled = getOptionDisabled
                ? getOptionDisabled(option)
                : void 0;
              return (
                <MenuItem key={i} value={id} disabled={disabled}>
                  {labels[id].name}
                </MenuItem>
              );
            })}
          </Select>
          {error?.message && (
            <FormHelperText variant="outlined">{error.message}</FormHelperText>
          )}
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default ControllerMultipleSelect;
