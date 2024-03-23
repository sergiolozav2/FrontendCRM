import { Edit, Flag } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
interface Props {
  info: any;
  color: string;
  isTitle: boolean;
}

export const BoxInforCliente = ({ info, color, isTitle }: Props) => {
  return (
    <>
      <Box
        sx={{
          borderLeft: `3px solid ${color}`,
          display: { xs: "none", md: "block" },
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            "--Grid-borderWidth": "4px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#F9F9F9",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderColor: "#F9F9F9",
            },
          }}
        >
          {!isTitle ? (
            <>
              <Grid item md={3} padding={1}>
                <Typography>{info.nombre}</Typography>
              </Grid>
              <Grid item md={2} padding={1}>
                <Typography align="right">{info.telefono}</Typography>
              </Grid>
              <Grid item md={1} padding={1}>
                <Box display={"flex"} justifyContent={"center"}>
                  <Flag
                    fontSize="small"
                    sx={{ color: info.colorPrioridad, mr: 1 }}
                  ></Flag>
                </Box>
              </Grid>
              <Grid
                item
                md={2.5}
                padding={1}
                sx={{ backgroundColor: info.colorEtapa }}
              >
                <Typography align="center" color={"white"}>
                  {info.etapa}
                </Typography>
              </Grid>
              <Grid item md={1} padding={1}>
                <Typography align="center">{info.cantidad}</Typography>
              </Grid>
              <Grid item md={2} padding={1}>
                <Typography align="right">
                  {isTitle ? "" : "$us"} {info.ganancias}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={3} padding={1}>
                <Typography align="center" color={"#C2C2C2"}>
                  {info.nombre}
                </Typography>
              </Grid>
              <Grid item md={2} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.telefono}</Typography>
              </Grid>
              <Grid
                item
                md={1}
                padding={1}
                color={"#C2C2C2"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography align="center">{info.prioridad}</Typography>
              </Grid>
              <Grid item md={2.5} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.etapa}</Typography>
              </Grid>
              <Grid
                item
                md={1}
                padding={1}
                color={"#C2C2C2"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography align="center">{info.cantidad}</Typography>
              </Grid>
              <Grid item md={2} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.ganancias}</Typography>
              </Grid>
            </>
          )}

          <Grid
            item
            md={0.5}
            padding={1}
            display={"flex"}
            justifyContent={"center"}
          >
            <IconButton sx={{ p: 0 }}>
              <Edit fontSize="small" color="disabled"></Edit>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderLeft: `4px solid ${color}`,
          borderRadius: "5px",
          display: { xs: "block", md: "none" },
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            "--Grid-borderWidth": "4px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#F9F9F9",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderColor: "#F9F9F9",
            },
          }}
        >
          <Grid item xs={5} padding={1}>
            <Typography>{info.nombre}</Typography>
          </Grid>
          <Grid item xs={3} padding={1}>
            <Typography align="right">
              {isTitle ? "" : "$us"} {info.ganancias}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            padding={1}
            sx={{ backgroundColor: info.colorEtapa }}
          >
            <Typography align="center" color={"white"}>
              {info.etapa}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
