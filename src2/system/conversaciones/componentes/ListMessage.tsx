import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  ArrowBackIos,
  Close,
  Edit,
  Reorder,
} from "@mui/icons-material";
import { BoxDisplay } from "../../../components/BoxDisplay";
import { ModalBox } from "../../../components/ModalBox";
import { InputBox } from "../../../components/InputBox";
import { ButtonBox } from "../../../components/ButtonBox";
import { SelectColorBox } from "../../../components/SelectColorBox";
import { BoxDisplayCenter } from "../../../components/BoxDisplayCenter";
import { BoxHidden } from "../../../components/BoxHidden";
import { BoxMensaje } from "./BoxMensaje";
import { DetailContacto } from "./DetailContacto";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { listaClientes, listaMensajes } from "../../../datos/datos";
interface Props {
  cliente: any;
}
export const ListMessage = ({ cliente }: Props) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [visibleInfoCliente, setVisibleInfoCiente] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { register, setValue, getValues, control } = useForm();
  const useFormProps = { register, setValue, getValues };
  return (
    <Grid container>
      <Grid item md={12} width={"100%"}>
        <Box>
          <Box sx={{ height: "60px", mb: 1 }}>
            <Box display={"flex"} justifyContent={"space-between"} p={1}>
              <Box
                sx={{ display: "flex", width: "100%", justifyContent: "left" }}
              >
                <BoxHidden>
                  <IconButton sx={{ pr: 0 }}>
                    <ArrowBackIos fontSize="small"></ArrowBackIos>
                  </IconButton>
                </BoxHidden>
                <Button
                  sx={{
                    display: "flex",
                    textAlign: "left",
                    width: "100%",
                    justifyContent: "left",
                  }}
                  onClick={() => setVisibleInfoCiente(!visibleInfoCliente)}
                >
                  <AccountCircle fontSize="large"></AccountCircle>
                  <Box mx={1}>
                    <Typography>
                      {
                        listaClientes.find(
                          (cl: any) => cl.clienteID == cliente.clienteID
                        )?.clienteNombre
                      }
                    </Typography>
                    <Typography fontSize={11}>Ult. vez 17:05</Typography>
                  </Box>
                </Button>
              </Box>
              <IconButton onClick={() => setVisibleDetails(!visibleDetails)}>
                <Reorder></Reorder>
              </IconButton>
            </Box>

            <Divider color="gainsboro"></Divider>
          </Box>
          <Box sx={{ height: "calc(79vh - 90px)" }} overflow={"auto"} p={1}>
            {listaMensajes
              .find((cl: any) => cl.clienteID == cliente.clienteID)
              ?.listaMensajes.map((conv: any) => (
                <BoxMensaje
                  personMessage={conv.personMessage}
                  message={conv.message}
                  time_message={conv.timeMessage}
                ></BoxMensaje>
              ))}
          </Box>
          <Box p={1} px={2}>
            <TextField
              label={`Nuevo Mensaje  `}
              type="date"
              variant="standard"
              size="small"
              // {...register("tarea")}
              sx={{
                color: "blue",
                width: "100%",
                mt: "4px",
              }}
              InputLabelProps={{
                color: "primary",
              }}
              multiline
              rows={2}
            ></TextField>
          </Box>
        </Box>
      </Grid>
      {visibleDetails ? (
        <Box sx={{ position: "absolute", right: { xs: 0, sm: 48 } }}>
          <DetailContacto
            visibleDetails={visibleDetails}
            setVisibleDetails={setVisibleDetails}
          ></DetailContacto>
        </Box>
      ) : null}
      {/* {visibleInfoCliente ? ( */}
      <Collapse
        easing={{ enter: "linear" }}
        in={visibleInfoCliente}
        orientation="horizontal"
        sx={{
          position: "absolute",
          right: { xs: 0, sm: 48 },
          // width: "400px",
        }}
      >
        <Box
          sx={{
            p: 1,
            backgroundColor: "white",
            borderLeft: "1px solid gainsboro",
            height: "87vh",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{ borderLeft: "6px solid orange", p: 1 }}
          >
            <Box>
              <Typography fontSize={18}>CLIENTE 1</Typography>
              <Typography fontSize={14}>Negociacion</Typography>
            </Box>
            <BoxDisplay>
              <IconButton onClick={() => setOpenModal(true)}>
                <Edit></Edit>
              </IconButton>
              <IconButton
                onClick={() => setVisibleInfoCiente(!visibleInfoCliente)}
              >
                <Close></Close>
              </IconButton>
            </BoxDisplay>
          </Box>
          <Divider></Divider>
          <BoxDisplayCenter>
            <AccountCircle
              sx={{ color: "gainsboro", fontSize: "200px" }}
            ></AccountCircle>
          </BoxDisplayCenter>
          <Divider></Divider>
          <Grid
            container
            p={2}
            // sx={{ borderTop: "1px solid gainsboro", borderRadius: "5px" }}
          >
            <Grid item sm={6} xs={12}>
              <Typography fontSize={14}>
                <strong>TELEFONO:</strong>
              </Typography>
              <Typography fontSize={14}>70005958</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography fontSize={14}>
                <strong>EMAIL:</strong>
              </Typography>
              <Typography fontSize={14}>mjso0308@gmail.com</Typography>
            </Grid>
            <Grid item sm={6} xs={12} marginTop={2}>
              <Typography fontSize={14}>
                <strong>PRIORIDAD:</strong>
              </Typography>
              <BoxDisplay>
                <Box
                  sx={{
                    width: "17px",
                    height: "17px",
                    backgroundColor: "orange",
                    borderRadius: "5px",
                    mr: 0.5,
                  }}
                ></Box>
                <Typography fontSize={14}>Media</Typography>
              </BoxDisplay>
            </Grid>

            <Grid item sm={6} xs={12} marginTop={2}>
              <Typography fontSize={14}>
                <strong>CATEGORÍA:</strong>
              </Typography>
              <BoxDisplay>
                <Box
                  sx={{
                    width: "17px",
                    height: "17px",
                    backgroundColor: "orange",
                    borderRadius: "5px",
                    mr: 0.5,
                  }}
                ></Box>
                <Typography fontSize={14}>Sin Categoria</Typography>
              </BoxDisplay>
            </Grid>
          </Grid>
          <ButtonBox
            withMargin
            sm={12}
            isFill
            label="+ Agregar Información"
            onClickFunction={() => {}}
          ></ButtonBox>
        </Box>
      </Collapse>
      <ModalBox
        openModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
      >
        <Box>
          <Typography variant="h6">Cliente</Typography>
          <Divider></Divider>
          <Grid container spacing={1} marginBlock={1}>
            <InputBox
              label={"Nombre"}
              name={"nombre"}
              useForm={useFormProps}
              md={12}
              sm={12}
            ></InputBox>
            <InputBox
              label={"Email"}
              name={"email"}
              useForm={useFormProps}
              md={6}
              sm={6}
            ></InputBox>
            <SelectColorBox
              sm={6}
              optionsList={[
                { nombre: "Ropa Femenina", color: "#23E9A5" },
                { nombre: "Ropa Masculina", color: "#63C7FF" },
                { nombre: "Zapatos", color: "#3C7BFF" },
                { nombre: "Accesorios", color: "#675BFF" },
                { nombre: "Sin Categoria", color: "gainsboro" },
              ]}
              label={"Color"}
              optionLabel={"nombre"}
              optionValueId={"nombre"}
              control={control}
            ></SelectColorBox>
            <SelectColorBox
              optionsList={[
                { prioridad: "Baja", color: "#1FCB71" },
                { prioridad: "Media", color: "#F5B31D" },
                { prioridad: "Alta", color: "#F51D5C" },
              ]}
              label={"Prioridad"}
              optionLabel={"prioridad"}
              optionValueId={"prioridad"}
              control={control}
            ></SelectColorBox>
            <SelectColorBox
              sm={6}
              optionsList={[
                { etapa: "Contacto Inicial", color: "#3498DB" },
                { etapa: "Seguimiento", color: "#29ABC9" },
                { etapa: "Negociación", color: "#29C9C2" },
                { etapa: "Vendido", color: "#1CB68E" },
              ]}
              label={"Etapa"}
              optionLabel={"etapa"}
              optionValueId={"etapa"}
              control={control}
            ></SelectColorBox>
          </Grid>
          <Grid
            container
            spacing={1}
            mt={1}
            display={"flex"}
            justifyContent={"right"}
          >
            <ButtonBox
              onClickFunction={() => setOpenModal(false)}
              isFill
              label={"Guardar"}
            ></ButtonBox>
            <ButtonBox
              onClickFunction={() => setOpenModal(false)}
              isFill={false}
              label={"Cancelar"}
            ></ButtonBox>
          </Grid>
        </Box>
      </ModalBox>
      {/* ) : null} */}
    </Grid>
  );
}; // setToastMessage,
