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
import { TableMensajeRapido } from "./TableMensajeRapido";
import { SelectBox } from "../../../componentes/SelectBox";

export const ShowMensajeRapido = () => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [tipo, setTipo] = useState("");
  const propUseForm = { register, setValue, getValues };
  const [addmensaje, setAddmensaje] = useState(false);
  const handleView = () => {};
  const storemensaje = () => {};
  const updatemensaje = () => {};
  const deletemensaje = () => {};
  const getmensajes = () => {};
  const store_orden_compra = async (event: any, opcion: number) => {
    console.log("subio");
    console.log(event);
    // let orden_id_temporal = id ?? 0;
    // if (opcion == 1) {
    //   handleFileUpload(event, orden_id_temporal);
    // } else {
    //   handleChange(event, orden_id_temporal);
    // }
  };
  const handleTipo = (e: any) => {
    console.log(e);
    setTipo(e);
  };
  const handleFileUpload = async (event: any, orden_comprah_id: any) => {
    const file = event.target.files[0];
  };
  const handleEdit = () => {};
  const handleAddmensaje = () => {
    setAddmensaje(!addmensaje);
  };
  return (
    <Box mt={0} width={"100vw"} height={"100vh"}>
      <Grid container sx={{ backgroundColor: "#fcfcfc" }}>
        <Grid item md={2} sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar
            opcion={{
              titulo: "MENSAJES RÁPIDOS",
              opcion: 5,
              ruta: "/mensajes-rapidos",
            }}
          ></SideBar>
        </Grid>
        <Grid item md={7} marginInline={1} mt={2}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
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
                        <SelectBox
                          md={4}
                          optionsList={[
                            { tipo: "texto" },
                            { tipo: "archivo" },
                            { tipo: "contacto" },
                            { tipo: "link" },
                          ]}
                          extra_function={handleTipo}
                          label={"Tipo"}
                          optionLabel={"tipo"}
                          optionValueId={"tipo"}
                          control={control}
                        ></SelectBox>
                        {/* <InputBox
                          label={"Tipo"}
                          name={"tipo"}
                          md={12}
                          useForm={propUseForm}
                        ></InputBox> */}
                        {tipo == "archivo" ? (
                          <Grid item xs={12} md={12} sx={{ mb: 4 }}>
                            <label htmlFor="upload-file">
                              <Button
                                variant="contained"
                                component="span"
                                sx={{ width: "100%", height: "100%" }}
                                // disabled={listArchivos.length >= 3}
                              >
                                Subir ARCHIVO
                              </Button>
                              <input
                                id="upload-file"
                                // hidden
                                accept="image/png, image/jpeg, image/jpg, application/pdf"
                                type="file"
                                onChange={(evento: any) =>
                                  store_orden_compra(evento, 1)
                                }
                              />
                            </label>
                          </Grid>
                        ) : null}
                        {tipo == "text" ? (
                          <InputBox
                            label={"Texto"}
                            name={"texto"}
                            md={4}
                            useForm={propUseForm}
                          ></InputBox>
                        ) : null}
                        {tipo == "link" ? (
                          <InputBox
                            label={"Link"}
                            name={"link"}
                            md={4}
                            useForm={propUseForm}
                          ></InputBox>
                        ) : null}

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
              <TableMensajeRapido
                mensajes={listaMensajes}
                handleEdit={handleEdit}
                handleDelete={function (
                  mensaje_id: number,
                  nombre: string
                ): void {
                  throw new Error("Function not implemented.");
                }}
              ></TableMensajeRapido>
            </Grid>
          </Grid>
        </Grid>
        {/*GRAFICOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={3}></Grid>
      </Grid>
    </Box>
  );
};
