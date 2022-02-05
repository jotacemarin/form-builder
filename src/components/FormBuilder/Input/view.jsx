import { Controller } from "react-hook-form";
import TextField from "emerald-ui/lib/TextField";

export const Input = ({ keyField, className, control }) => {
  return (
    <Controller
      name={keyField}
      control={control}
      className={className}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={keyField}
          className={className}
        />
      )}
    />
  );
};

export default Input;
