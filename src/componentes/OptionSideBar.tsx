import { Button, Divider, Grid, Typography } from "@mui/material";

interface Props {
  label: string;
  opcion_seleccionada: any;
  activo: boolean;
  sm?: number;
  md?: number;
  xs?: number;
  changeOption: (e: any) => void;
  // register:  any;
}

export const OptionSideBar = ({
  label,
  changeOption,
  opcion_seleccionada,
  md,
  sm,
  activo,
  xs,
}: Props) => {
  return (
    <Grid
      item
      xs={xs ? xs : 12}
      md={md ? md : 123}
      sm={sm ? sm : 12}
      sx={activo ? { backgroundColor: "white" } : {}}
    >
      <Button
        variant={activo ? "contained" : undefined}
        sx={
          activo
            ? {
                p: 2,
                width: "100%",
                textAlign: "left",
                color: "white",
                // backgroundColor:"#3A3939"
              }
            : { p: 2, width: "100%" }
        }
        onClick={() => {
          changeOption(opcion_seleccionada);
        }}
      >
        <Typography sx={{ fontSize: "10px", textAlign: "left", width: "100%" }}>
          {label}
        </Typography>
      </Button>
      <Divider></Divider>
    </Grid>
  );
};
