import { Box, Grid, TextField, Typography } from "@mui/material";
import { OptionSideBar } from "../componentes/OptionSideBar";
import { useContext } from "react";
import { AuthContext } from "../auth";
import { useAuth } from "../auth/context/useAuth";
import { useNavigate } from "react-router-dom";
import { listaOpciones } from "../listas/Listas";

interface Props {
  opcion: any;
  //   label: string;
  //   activo: boolean;
  // register:  any;
}

export const SideBar = ({ opcion }: Props) => {
  // const { setOpcion } = useContext(AuthContext);
  // const { authState } = useAuth();
  // const { opcion } = authState;
  const navigate = useNavigate();
  const changeOption = (opcion_seleccionada: any) => {
    console.log(opcion_seleccionada);
    // setOpcion(opcion_seleccionada.opcion);
    navigate(opcion_seleccionada.ruta);
  };
  return (
    <Box display={{ xs: "none", md: "flex" }} sx={{ width: "250px" }}>
      <Grid container>
        <Typography m={2} variant="h6">
          MENU
        </Typography>
        <Grid item md={12}>
          <TextField
            sx={{ marginInline: 1, fontSize: "10px" }}
            size="small"
          ></TextField>
        </Grid>
        {listaOpciones.map((op) => (
          <OptionSideBar
            opcion_seleccionada={op}
            changeOption={changeOption}
            label={op.titulo}
            activo={opcion == op.opcion}
          ></OptionSideBar>
        ))}

        {/* <OptionSideBar
        value={2}
        setOpcion={setOpcion}
        label="Items"
        activo={opcion == 2}
      ></OptionSideBar>
      <OptionSideBar
        value={3}
        setOpcion={setOpcion}
        label="Ventas"
        activo={opcion == 3}
      ></OptionSideBar>
      <OptionSideBar
        value={4}
        setOpcion={setOpcion}
        label="Clientes"
        activo={opcion == 4}
      ></OptionSideBar>
      <OptionSideBar
        value={5}
        setOpcion={setOpcion}
        label="Mensajes Rapidos"
        activo={opcion == 5}
      ></OptionSideBar>
      <OptionSideBar
        setOpcion={setOpcion}
        value={6}
        label="Configuracion"
        activo={opcion == 6}
      ></OptionSideBar>
      <OptionSideBar
        value={7}
        setOpcion={setOpcion}
        label="Colaboracion"
        activo={opcion == 7}
      ></OptionSideBar> */}
      </Grid>
    </Box>
    // <Grid
    //   item
    //   md={2}
    //   sx={{ borderRight: "1px solid gainsboro", backgroundColor: "white" }}
    // >
    //   <Grid container>
    //     <Typography m={2} variant="h6">
    //       MENU
    //     </Typography>
    //     <Grid item md={12}>
    //       <TextField
    //         sx={{ marginInline: 1, fontSize: "10px" }}
    //         size="small"
    //       ></TextField>
    //     </Grid>
    //     <OptionSideBar label="Chats" activo={opcion == 1} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Items" activo={opcion==2} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Ventas" activo={opcion==3} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Clientes" activo={opcion==4} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Mensajes Rapidos" activo={opcion==5} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Configuracion" activo={opcion==6} setOpcion={setOpcion}></OptionSideBar>
    //     <OptionSideBar label="Colaboracion" activo={opcion==7} setOpcion={setOpcion}></OptionSideBar>
    //   </Grid>
    // </Grid>
  );
};
