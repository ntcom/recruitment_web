import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";

interface Option extends FieldValues {
  id: number;
}

interface Label extends Option {
  name: string;
}

interface Props<T extends FieldValues, O extends Option[]> extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: FieldPath<T>;
  options: O;
  selector: (option: O[number]) => string;
  onChangeSelect?: (ids: number[]) => Promise<void> | void;
  getOptionDisabled?: (option: number) => boolean;
  placeholder: string;
  noOptionsText: string;
}

const AutocompleteMultipleSelect = <T extends FieldValues, O extends Option[]>(
  props: Props<T, O>
) => {
  const {
    control,
    name,
    options,
    selector,
    onChangeSelect,
    placeholder,
    disabled,
    getOptionDisabled,
    noOptionsText,
    ...rest
  } = props;

  const labels = options.reduce<Record<number, Label>>((acc, option) => {
    const id = option.id;
    acc[id] = { id, name: selector(option) };
    return acc;
  }, {});

  return (
    <Controller
      render={({ field: { value, ...others }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            fullWidth
            disabled={disabled}
            {...(disabled && {
              forcePopupIcon: false,
            })}
            ChipProps={{
              sx: {
                borderRadius: 0,
                ...(disabled && {
                  "&.Mui-disabled": {
                    opacity: "revert",
                  },
                }),
              },
              ...(disabled && {
                onDelete: void 0,
              }),
            }}
            options={options.map((option) => option.id)}
            getOptionLabel={(option) => labels[option].name}
            noOptionsText={noOptionsText}
            getOptionDisabled={getOptionDisabled}
            multiple={true}
            renderInput={(params) => (
              <TextField
                error={Boolean(error)}
                helperText={error?.message}
                placeholder={disabled ? void 0 : placeholder}
                {...params}
                {...rest}
              />
            )}
            renderOption={(props, option: number) => (
              <Box component="li" {...props} key={option}>
                {labels[option].name}
              </Box>
            )}
            {...others}
            value={
              Array.isArray(value) && value.every((id: number) => id in labels)
                ? value
                : []
            }
            onChange={(_event, value: number[]) => {
              others.onChange(value);
              if (onChangeSelect) {
                onChangeSelect(value);
              }
            }}
          />
        );
      }}
      name={name}
      control={control}
    />
  );
};

export default AutocompleteMultipleSelect;
