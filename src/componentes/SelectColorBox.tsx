import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  optionsList: any[];
  label: string;
  optionLabel: string; //El valor de la opcion seleccionada que muestra ej: DELL (nombre)
  optionValueId: string; //El ID de la opcion seleccionada que guarda ej: 2 (marca_id)
  optionValueName?: string; //Cambia el Nombre con el que se guarda ej: "usuario_id" -> "usuario_asignado_id"
  optionValueAttribute?: string; //Muestra un valor anidado ej: "usuario":{"persona":{"nombre_completo"}}
  optionValueObject?: boolean; //Guarda el objeto completo
  control: any;
  disable?: boolean;
  errors?: any;
  variant?: any;
  messageError?: string;
  extra_function?: (value_id: any, nombre?: any, valor2?: any) => void;
  md?: number;
  xs?: number;
  sm?: number;
}

export const SelectColorBox = ({
  label,
  variant,
  optionValueId,
  control,
  optionsList,
  errors,
  optionLabel,
  optionValueAttribute,
  messageError,
  optionValueObject,
  md,
  xs,
  sm,
  disable,
  optionValueName,
  extra_function,
}: Props) => {
  return (
    <Grid item xs={xs ? xs : 12} md={md ? md : 6} sm={sm ? sm : 6} sx={{}}>
      <Typography fontSize={12}>{label}</Typography>
      <Controller
        name={optionValueName ? optionValueName : optionValueId}
        rules={{ required: errors ? true : false }}
        control={control}
        render={({ field }) => {
          const { onChange, value } = field;
          return (
            <Autocomplete
              value={
                value
                  ? optionsList.find(
                      (option: any) => value === option[optionValueId]
                    ) ?? null
                  : null
              }
              disabled={disable}
              getOptionLabel={(option: any) =>
                optionValueAttribute
                  ? option[optionLabel][optionValueAttribute]
                  : option[optionLabel]
              }
              renderOption={(props, option: any) => (
                <Box sx={{ display: "flex" }} component="li" {...props}>
                  <Box
                    sx={{
                      backgroundColor: option["color"],
                      width: "20px",
                      height: "20px",
                      borderRadius: "5px",
                      mr: 1,
                    }}
                  ></Box>
                  {optionValueAttribute
                    ? option[optionLabel][optionValueAttribute]
                    : option[optionLabel]}
                </Box>
              )}
              onChange={(_event: any, newValue) => {
                onChange(newValue ? newValue[optionValueId] : null);
                extra_function
                  ? extra_function(
                      newValue ? newValue[optionValueId] : null,
                      optionValueAttribute
                        ? newValue[optionLabel][optionValueAttribute]
                        : newValue[optionLabel],
                      optionValueObject ? newValue : null
                    )
                  : null;
              }}
              options={optionsList}
              renderInput={(params) => (
                <TextField
                  variant={variant ? variant : "standard"}
                  {...params}
                  size="small"
                  inputProps={{
                    ...params.inputProps,
                    style: { fontSize: "14px", padding: "8px" },
                  }}
                  error={
                    errors
                      ? errors[
                          optionValueName ? optionValueName : optionValueId
                        ]?.type === "required"
                        ? true
                        : false
                      : false
                  }
                />
              )}
            />
          );
        }}
      />

      {errors
        ? errors[optionValueName ? optionValueName : optionValueId]?.type ===
            "required" && (
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
