import { Box, Grid } from "@mui/material";
import { ListConversacion } from "./ListConversacion";
import { ListMensaje } from "./ListMensaje";
import { SideBar } from "../../../navigation/SideBar";
import { useState } from "react";
import { listaClientes } from "../../../listas/Listas";

export const ShowConversacion = () => {
  const [cliente, setCliente] = useState({});
  console.log(listaClientes);
  return (
    <Box mt={0}>
      <Grid container sx={{ backgroundColor: "#fcfcfc" }}>
        <Grid item sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar
            opcion={{
              titulo: "CONVERSACIONES",
              opcion: 1,
              ruta: "/conversaciones",
            }}
          ></SideBar>
        </Grid>
        <Grid item sx={{ width: { xs: "100%", md: "calc(100% - 251px)" } }}>
          <Box display={"flex"} sx={{ backgroundColor: "#EAEAEA" }}>
            <Box p={{ xs: 0, sm: 4 }} px={{ xs: 0, sm: 6 }} width={"100%"}>
              <Box sx={{ backgroundColor: "white" }} display={"flex"}>
                <Box width={"245px"} display={{ xs: "none", sm: "flex" }}>
                  <ListConversacion
                    cliente={cliente}
                    setCliente={setCliente}
                  ></ListConversacion>
                </Box>
                <ListMensaje cliente={cliente}></ListMensaje>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; // setToastMessage,
