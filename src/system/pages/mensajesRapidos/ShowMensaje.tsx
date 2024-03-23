import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { InputBox } from "../../../componentes/InputBox";
import { useForm } from "react-hook-form";
import { OptionSideBar } from "../../../componentes/OptionSideBar";
import { ButtonBox } from "../../../componentes/ButtonBox";

import { useState } from "react";
import { listaMensajes } from "../../../listas/Listas";
import { SideBar } from "../../../navigation/SideBar";
import { TableMensaje } from "./TableMensaje";

export const ShowMensaje = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const propUseForm = { register, setValue, getValues };
  const [addmensaje, setAddmensaje] = useState(false);
  const handleView = () => {};
  const storemensaje = () => {};
  const updatemensaje = () => {};
  const deletemensaje = () => {};
  const getmensajes = () => {};
  const handleEdit = () => {};
  const handleAddmensaje = () => {
    setAddmensaje(!addmensaje);
  };
  return (
    <Box mt={0}>
      <Grid container sx={{ backgroundColor: "#fcfcfc" }}>
        <Grid item md={2} sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar></SideBar>
        </Grid>
        <Grid item md={7} marginInline={1} mt={2}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h6">mensaje</Typography>
                <ButtonBox
                  onClickFunction={handleAddmensaje}
                  isFill={true}
                  label={"+ mensaje"}
                ></ButtonBox>
              </Box>
              <Divider></Divider>
            </Grid>
            {addmensaje ? (
              <>
                <Grid item md={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item md={12}>
                          <Typography variant="h6">
                            {" "}
                            Informacion del producto
                          </Typography>
                          {/* <Typography fontSize={9}> Para ingresar mas datos, aprete en detalles</Typography> */}
                          <Divider></Divider>
                        </Grid>

                        <InputBox
                          label={"Nombre"}
                          name={"nombre"}
                          md={8}
                          useForm={propUseForm}
                        ></InputBox>

                        <InputBox
                          label={"Tipo"}
                          name={"tipo"}
                          md={12}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Texto"}
                          name={"texto"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Link"}
                          name={"link"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>

                        <Grid item md={12} mt={1}>
                          <Typography variant="h6">Mas Detalles</Typography>
                          <Divider></Divider>
                        </Grid>

                        <Grid item md={9} justifyContent={"right"}>
                          <ButtonBox
                            onClickFunction={() => {}}
                            label="Guardar"
                            isFill={true}
                          ></ButtonBox>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ) : null}

            <Grid item md={12} mt={1}>
              <TableMensaje
                mensajes={listaMensajes}
                handleEdit={handleEdit}
                handleDelete={function (
                  mensaje_id: number,
                  nombre: string
                ): void {
                  throw new Error("Function not implemented.");
                }}
              ></TableMensaje>
            </Grid>
          </Grid>
        </Grid>
        {/*GRAFICOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={3}></Grid>
      </Grid>
    </Box>
  );
};
