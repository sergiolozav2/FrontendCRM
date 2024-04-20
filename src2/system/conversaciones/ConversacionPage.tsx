import { Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import { BasePage } from "../../components/BasePage";
import { AccountCircle, MoreVert, Search } from "@mui/icons-material";
import { BoxContacto } from "./componentes/BoxContacto";
import { listaClientes, listaMensajes } from "../../datos/datos";
import { useState } from "react";
import { InputBox } from "../../components/InputBox";
import { ListMessage } from "./componentes/ListMessage";
import { useForm } from "react-hook-form";
import { BoxDisplay } from "../../components/BoxDisplay";
export const ConversacionPage = () => {
  const { register, setValue, getValues } = useForm();
  const useFormProps = { register, setValue, getValues };
  const [selectedClient, setSelectedClient] = useState({});
  return (
    <BasePage opcion={{ titulo: "Chats", opcion: 3, ruta: "/conversaciones" }}>
      <Box sx={{ p: { xs: 0, md: 1 } }}>
        <BoxDisplay sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              p: 2,
              width: "250px",
              backgroundColor: "white",
            }}
          >
            <Box pr={1} borderRight={"gainsboro solid 1px"}>
              <Box display={"flex"} justifyContent={"space-between"} p={1}>
                <BoxDisplay>
                  <AccountCircle color="disabled"></AccountCircle>
                  <Typography pl={1}>Maria Jose</Typography>
                </BoxDisplay>
                <MoreVert fontSize="small"></MoreVert>
              </Box>
              <Divider></Divider>
              <Box pl={2}>
                <BoxDisplay sx={{ paddingBlock: 1 }}>
                  <InputBox
                    variant={"outlined"}
                    label={""}
                    name={"contacto"}
                    useForm={useFormProps}
                  ></InputBox>
                  <IconButton>
                    <Search fontSize="small"></Search>
                  </IconButton>
                </BoxDisplay>
                <Typography>Contactos</Typography>
                {listaClientes.map((conv: any) => (
                  <button
                    style={{
                      padding: 0,
                      paddingTop: 4,
                      border: "none",
                      backgroundColor: "white",
                      textAlign: "left",
                    }}
                    onClick={() => {
                      setSelectedClient(conv);
                    }}
                  >
                    <BoxContacto
                      selectedClient={selectedClient == conv}
                      cliente={conv}
                    ></BoxContacto>
                  </button>
                ))}
              </Box>
            </Box>
          </Box>
          <ListMessage cliente={selectedClient}></ListMessage>
        </BoxDisplay>
      </Box>
    </BasePage>
  );
};
