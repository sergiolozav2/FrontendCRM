import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { InputBox } from "../../../componentes/InputBox";
import { useForm } from "react-hook-form";
import { ButtonBox } from "../../../componentes/ButtonBox";
import { useState } from "react";
import { TableIntegrante } from "./TableIntegrante";
import { listaIntegrantes } from "../../../listas/Listas";
import { SideBar } from "../../../navigation/SideBar";

export const ShowIntegrante = () => {
  const { register, setValue, getValues } = useForm();
  const propUseForm = { register, setValue, getValues };
  const [addItem, setAddItem] = useState(false);
  const handleEdit = () => {};
  const handleAddItem = () => {
    setAddItem(!addItem);
  };
  return (
    <Box mt={8}>
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid item md={2} sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar></SideBar>
        </Grid>
        {/*FORMULARIO Y TABLASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={7} ml={2} mt={2}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h6">Integrantes</Typography>
                <ButtonBox
                  onClickFunction={handleAddItem}
                  isFill={true}
                  label={"+ item"}
                ></ButtonBox>
              </Box>
              <Divider></Divider>
            </Grid>
            {addItem ? (
              <>
                <Grid item md={12}>
                  <Box>
                    <Card
                      sx={{
                        minWidth: "100%",
                        boxShadow: "0px 0px 5px 5px #f8f8f8",
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={1}>
                          <Grid item md={12}>
                            <Typography variant="h6">
                              {" "}
                              Informacion del Integrante
                            </Typography>
                            {/* <Typography fontSize={9}> Para ingresar mas datos, aprete en detalles</Typography> */}
                            <Divider></Divider>
                          </Grid>

                          <InputBox
                            label={"Nombre"}
                            name={"nombre"}
                            md={12}
                            useForm={propUseForm}
                          ></InputBox>
                          <InputBox
                            label={"Cargo"}
                            name={"cargo"}
                            md={6}
                            useForm={propUseForm}
                          ></InputBox>
                          <InputBox
                            label={"Telefono"}
                            name={"telefono"}
                            md={6}
                            useForm={propUseForm}
                          ></InputBox>
                          <InputBox
                            label={"Correo Electronico"}
                            name={"correo"}
                            md={12}
                            useForm={propUseForm}
                          ></InputBox>

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
                  </Box>
                </Grid>
              </>
            ) : null}

            <Grid item md={12} mt={1}>
              <TableIntegrante
                integrantes={listaIntegrantes}
                handleEdit={handleEdit}
                handleDelete={function (): void {
                  throw new Error("Function not implemented.");
                }}
              ></TableIntegrante>
            </Grid>
          </Grid>
        </Grid>
        {/*GRAFICOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={3}></Grid>
      </Grid>
    </Box>
  );
};
