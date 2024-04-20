import { Box, Divider, TextField, Typography } from "@mui/material";
import {
  listaClientes,
  listaConversaciones,
  listaIntegrantes,
  listaMensajes,
} from "../../../listas/Listas";
import { BoxConversacion } from "./components/BoxConversacion";
import { AccountCircle, MoreVert } from "@mui/icons-material";
interface Props {
  setCliente: (cliente: any) => void;
  cliente: any;
}
export const ListConversacion = ({ setCliente, cliente }: Props) => {
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
      {listaClientes.map((conv: any) => (
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            textAlign: "left",
          }}
          onClick={() => {
            console.log(conv.clienteID);

            setCliente(conv);
            console.log(listaClientes);
          }}
        >
          <BoxConversacion
            cliente={conv}
            lastMessage={
              listaMensajes
                .find((cliente: any) => cliente.clienteID == conv.clienteID)
                ?.listaMensajes.at(-1)?.message ?? ""
            }
            timeMessage={
              listaMensajes
                .find((cliente: any) => cliente.clienteID == conv.clienteID)
                ?.listaMensajes.at(-1)?.timeMessage ?? ""
            }
          ></BoxConversacion>
        </button>
      ))}
    </Box>
  );
}; // setToastMessage,
