import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  //   accesos: RolAcceso[] | null;
  label_title: string;
  md?: number;
  disable?:boolean;
  message?: string;
  fieldValueName: string;
  errors?: any;
  control?: any;
  lista: any[];
  handleChange?: (valor: any) => void;
}

export const SelectSimpleBox = ({
  label_title,
  fieldValueName,
  control,
  lista,
  disable,
  errors,
  message,
  md,
  handleChange,
}: Props) => {
  return (
    <Grid item xs={12} md={md ? md : 6} sx={{}}>
      <Controller
        name={fieldValueName}
        rules={{ required: errors ? true : false }}
        control={control}
        render={({ field }) => {
          const { onChange, value } = field;
          return (
            <Autocomplete
              value={
                value
                  ? lista.find((option: any) => value === option) ?? null
                  : null
              }
              getOptionLabel={(option: any) => option}
              renderOption={(props, option: any) => (
                <Box component="li" {...props}>
                  {option}
                </Box>
              )}
              disabled={disable??false}

              onChange={(_event: any, newValue) => {
                onChange(newValue ? newValue : null);
                
                handleChange
                  ? handleChange(newValue ? newValue : null)
                  : null;
              }}
              options={lista}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={
                    errors ? errors[fieldValueName]?.type === "required" : false
                  }
                  label={label_title}
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          );
        }}
      />

      {errors
        ? errors[fieldValueName]?.type === "required"
        : false && (
            <Typography
              paddingLeft={2}
              paddingTop={1}
              fontSize={12.5}
              color={"#F36892"}
            >
              {message}
            </Typography>
          )}
    </Grid>
  );
};
