import { Box, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { listaOpciones } from "../datos/datos";
import { OptionSideBar } from "./components/OptionSideBar";
import { informacionUsuario } from "../../src/listas/Listas";

interface Props {
  opcion: any;
}

export const SideBar = ({ opcion }: Props) => {
  const navigate = useNavigate();
  const changeOption = (opcion_seleccionada: any) => {
    console.log(opcion_seleccionada);
    navigate(opcion_seleccionada.ruta);
  };
  return (
    <Box
      display={{ xs: "flex", md: "flex", backgroundColor: "white" }}
      sx={{ width: "250px" }}
    >
      <Grid container p={1}>
        <Typography m={2} marginBlock={0} variant="h6">
          MENU
        </Typography>
        <Typography m={2} marginBlock={1}>
          Bienvenido {informacionUsuario.usuario.nombre}
        </Typography>
        <Grid item md={12}>
          <TextField
            sx={{ marginInline: 1, fontSize: "10px" }}
            size="small"
          ></TextField>
        </Grid>

        <Box sx={{ p: 1, width: "100%" }}>
          {listaOpciones.map((op) => (
            <OptionSideBar
              opcion_seleccionada={op}
              changeOption={changeOption}
              label={op.titulo}
              activo={opcion.opcion == op.opcion}
            ></OptionSideBar>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "botton" }}>
          <OptionSideBar
            opcion_seleccionada={9}
            changeOption={changeOption}
            label={"Configuracion"}
            activo={false}
          ></OptionSideBar>
        </Box>
      </Grid>
    </Box>
  );
};
