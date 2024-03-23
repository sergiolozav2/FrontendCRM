import { Box, Divider, TextField, Typography } from "@mui/material";
import { listaConversaciones, listaIntegrantes } from "../../../listas/Listas";
import { BoxConversacion } from "./components/BoxConversacion";
import { AccountCircle, MoreVert } from "@mui/icons-material";

export const ListConversacion = () => {
  return (
    <Box height={"100%"} pr={1} borderRight={"gainsboro solid 1px"}>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Box display={"flex"}>
          <AccountCircle color="disabled"></AccountCircle>
          <Typography pl={1}>Maria Jose</Typography>
        </Box>
        <MoreVert fontSize="small"></MoreVert>
      </Box>
      <Divider></Divider>
      <Box p={1}>
        <TextField
          size="small"
          InputProps={{ sx: { fontSize: "10px" } }}
        ></TextField>
        <Typography sx={{ mt: 1 }}>Contactos</Typography>
      </Box>
      <Divider></Divider>
      {listaConversaciones.map((conv: any) => (
        <BoxConversacion
          nombreContacto={conv.nombreContacto}
          lastMessage={conv.lastMessage}
          timeMessage={conv.timeMessage}
        ></BoxConversacion>
      ))}
    </Box>
  );
}; // setToastMessage,
