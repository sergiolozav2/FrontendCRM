import { Grid, TextField, Typography } from "@mui/material";

interface Props {
  label: string;
  name: string;
  useForm: any;
  variant?: any;
  disabled?: boolean;
  defaultValue?: string;
  sm?: number;
  md?: number;
  xs?: number;
  backgroundColor?: string;
  messageError?: string;
  errors?: any;
  multiline?: boolean;
  rows?: number;
  onChangeField?: (e: any) => void;
  // register:  any;
}

export const InputBox = ({
  label,
  name,
  messageError,
  defaultValue,
  onChangeField,
  useForm,
  errors,
  md,
  sm,
  disabled,
  xs,
  backgroundColor,
  multiline,
  variant,
  rows,
}: Props) => {
  const { setValue, getValues, register } = useForm;
  return (
    <Grid item xs={xs ? xs : 12} md={md ?? sm ?? 6} sm={sm ?? 12} sx={{}}>
      <Typography mb={0.2} fontSize={11}>
        {label}
      </Typography>
      <TextField
        defaultValue={defaultValue ?? "---"}
        sx={{
          fontSize: "12px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #F9F9F9",
          backgroundColor: backgroundColor ? backgroundColor : "#F9F9F9",
        }}
        {...register(name, {
          required: errors ? true : false,
          minLength: { value: errors ? 4 : 0, message: "error message" },
        })}
        disabled={disabled ? disabled : false}
        required={errors ? true : false}
        error={
          errors
            ? errors[name]?.type === "required" ||
              errors[name]?.type === "minLength"
              ? true
              : false
            : false
        }
        InputLabelProps={{
          style: {
            fontSize: "12px",
            padding: "8px",
            // border: "1px solid #F9F9F9",
          },
        }}
        // InputProps={{
        //   style: { border: "1px solid #F9F9F9" },
        // }}
        inputProps={{
          style: {
            fontSize: "12px",
            padding: "8px",
            // border: "1px solid #F9F9F9",
          },
        }}
        size="small"
        variant={variant ?? "standard"}
        multiline={multiline ?? false}
        rows={rows ?? 1}
        onFocus={() => (getValues(name) === "---" ? setValue(name, "") : null)}
        onChange={(e) => {
          onChangeField ? onChangeField(e) : null;
        }}
      />

      {errors
        ? (errors[name]?.type === "required" ||
            errors[name]?.type === "minLength") && (
            <Typography
              paddingLeft={2}
              paddingTop={1}
              fontSize={12.5}
              color={"#F36892"}
            >
              {messageError}
            </Typography>
          )
        : null}
    </Grid>
  );
};
