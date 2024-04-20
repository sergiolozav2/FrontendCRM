import {
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { BasePage } from "../../components/BasePage";
import { useState } from "react";
import { BoxSpaceBetween } from "../../../src/componentes/BoxSpaceBetween";
import { listaItems } from "../../datos/datos";
import React from "react";
import { informacionUsuario } from "../../../src/listas/Listas";
import { ButtonBox } from "../../../src/componentes/ButtonBox";
export const ConfiguracionPage = () => {
  const [vista, setVista] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <BasePage
      opcion={{ titulo: "Configuracion", opcion: 9, ruta: "/configuracion" }}
    >
      <BoxSpaceBetween>
        <Tabs
          value={vista}
          onChange={(_event: React.SyntheticEvent, newValue: number) =>
            setVista(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab color="secondary" key={1} label={"USUARIO"} {...a11yProps(0)} />
          <Tab color="secondary" key={2} label={"EMPRESA"} {...a11yProps(1)} />
          <Tab
            color="secondary"
            key={2}
            label={"TELEFONOS"}
            {...a11yProps(2)}
          />
        </Tabs>
        {/* <BoxDisplay>
          <Button onClick={handleModal}>
            <Add></Add>
            <BoxHidden>
              <>Nuevo Item</>
            </BoxHidden>
          </Button>
          <Divider orientation="vertical"></Divider>
          <Button>
            <Upload></Upload>
            <BoxHidden>
              <>Cargar Items</>
            </BoxHidden>
          </Button>
        </BoxDisplay> */}
      </BoxSpaceBetween>

      <Divider></Divider>
      {vista == 1 ? (
        <>
          <Grid container p={2}>
            <Grid item sm={4}>
              <Box>
                <Typography>Nombre Empresa</Typography>
                <Typography>Categoría</Typography>
                <Typography>Integrantes</Typography>
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box>
                <Typography>
                  : {informacionUsuario.usuario.empresa.nombreEmpresa}
                </Typography>
                <Typography>: </Typography>
                <Typography>: </Typography>
              </Box>
            </Grid>
          </Grid>
          <ButtonBox
            onClickFunction={function (e?: any): void {
              throw new Error("Function not implemented.");
            }}
            isFill={true}
            label={"Editar Informacion"}
          ></ButtonBox>
        </>
      ) : (
        vista==1?
        <>
          <Grid container p={2}>
            <Grid item sm={4}>
              <Box>
                <Typography>Nombre</Typography>
                <Typography>Correo</Typography>
                <Typography>Telefono</Typography>
                <Typography>Rol</Typography>
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box>
                <Typography>: {informacionUsuario.usuario.nombre}</Typography>
                <Typography>: {informacionUsuario.usuario.correo}</Typography>
                <Typography>: {informacionUsuario.usuario.telefono}</Typography>
                <Typography>: {informacionUsuario.usuario.rol}</Typography>
              </Box>
            </Grid>
          </Grid>
          <ButtonBox
            onClickFunction={function (e?: any): void {
              throw new Error("Function not implemented.");
            }}
            isFill={true}
            label={"Editar Informacion"}
          ></ButtonBox>
        </>:<>
        
        </>
      )}
      <Grid container></Grid>
      {/* <>{openModal ? <FormItem></FormItem> : null}</>
      <Box mt={2}>
        <TableItem items={listaItems}></TableItem>
      </Box> */}
    </BasePage>
  );
};
