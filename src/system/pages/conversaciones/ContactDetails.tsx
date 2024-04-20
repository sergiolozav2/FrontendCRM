import {
  Box,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ButtonBox } from "../../../componentes/ButtonBox";
import {
  ArrowBack,
  AttachFile,
  Edit,
  EmailRounded,
  FmdGood,
  ShoppingCart,
  Visibility,
} from "@mui/icons-material";
import { BoxDisplay } from "../../../componentes/BoxDisplay";
import { ModalComponent } from "../../../componentes/ModalComponent";
import { TablePedido } from "./TablaPedido";
import { BoxJustifyRight } from "../../../componentes/BoxJustifyRight";
interface Props {
  setVisibleDetails: (open: boolean) => void;
  visibleDetails: boolean;
}
export const ContactDetails = ({
  setVisibleDetails,
  visibleDetails,
}: Props) => {
  const [vista, setVista] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "white",
        borderLeft: "1px solid gainsboro",
        width: "350px",
        height: "87vh",
      }}
    >
      <Box display={"flex"}>
        <IconButton onClick={() => setVisibleDetails(!visibleDetails)}>
          <ArrowBack></ArrowBack>
        </IconButton>
        <Tabs
          sx={{ mb: 1, mt: 0 }}
          value={vista}
          onChange={(_event: React.SyntheticEvent, newValue: number) =>
            setVista(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab
            color="secondary"
            key={1}
            sx={{ fontSize: "12px", p: 0.5 }}
            label={"Pedido Actual"}
            {...a11yProps(0)}
          />
          <Tab
            color="secondary"
            key={2}
            sx={{ fontSize: "12px", p: 0.5 }}
            label={"Destacados"}
            {...a11yProps(1)}
          />
          <Tab
            color="secondary"
            key={3}
            sx={{ fontSize: "12px", p: 0.5 }}
            label={"Historial"}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      {vista == 0 ? (
        <Box maxWidth={"400px"} p={2}>
          <BoxDisplay>
            <Typography variant="h5">PRODUCTO 1</Typography>
            <BoxJustifyRight>
              <IconButton>
                <Edit></Edit>
              </IconButton>
            </BoxJustifyRight>
          </BoxDisplay>
          <Typography
            fontSize={"14px"}
            sx={{ overflow: "hidden", textOverflow: "ellipsis", pb: 2, pt: 1 }}
          >
            Breve descripcion del producto, que incluye, si hay descuento, que
            caracteristicas tiene y datos necesarios
          </Typography>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Typography fontSize={"14px"}>CANTIDAD</Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                10 Unidades
              </Typography>
              <Typography fontSize={"14px"}>PRECIO</Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                300 Bs.
              </Typography>
              <Typography fontSize={"14px"}>FECHA </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                15/02/2022
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography fontSize={"14px"}>METODO DE PAGO </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                Transaccion
              </Typography>
              <Typography fontSize={"14px"}>TOTAL VENTA </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                3000Bs.
              </Typography>
              <Typography fontSize={"14px"}>DIRECCION </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                7mo Anillo Banzer
              </Typography>
            </Grid>
            <Grid container mb={1}>
              <ButtonBox
                onClickFunction={() => {}}
                isFill
                label={"+ DETALLES"}
                mr={1}
              ></ButtonBox>
              <ButtonBox
                onClickFunction={() => {}}
                isFill
                label={"+ PRODUCTO"}
              ></ButtonBox>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"right"}>
              <ButtonBox
                label="CONCLUIR PEDIDO"
                isFill={false}
                onClickFunction={() => {}}
              ></ButtonBox>
            </Grid>
          </Grid>
        </Box>
      ) : null}
      {vista == 1 ? (
        <Box maxWidth={"400px"} minWidth={"100%"}>
          <Box
            sx={{
              border: "1px solid gainsboro",
              borderRadius: "5px",
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box>
              <BoxDisplay>
                <AttachFile
                  sx={{ color: "gray" }}
                  fontSize="small"
                ></AttachFile>
                <Typography pl={0.5}>Comprobante</Typography>
              </BoxDisplay>
              <Typography fontSize={"12px"}>comprobante.png</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <Visibility color="primary"></Visibility>
              </IconButton>
            </Box>
            {/* <Visibility sx={{ alignSelf: "right" }}></Visibility> */}
          </Box>
          <Box
            sx={{
              border: "1px solid gainsboro",
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <BoxDisplay>
                <FmdGood sx={{ color: "gray" }} fontSize="small"></FmdGood>
                <Typography pl={0.5}>Ubicacion</Typography>
              </BoxDisplay>

              <Typography
                fontSize={"12px"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "100%",
                }}
              >
                https://maps.app.goo.gl/DBjNWdW4ag6Y1T8z5
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <Visibility color="primary"></Visibility>
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid gainsboro",
              p: 1,
            }}
          >
            <Box>
              <BoxDisplay>
                <EmailRounded
                  sx={{ color: "gray" }}
                  fontSize="small"
                ></EmailRounded>
                <Typography pl={0.5}>Mensaje</Typography>
              </BoxDisplay>
              <Typography fontSize={"12px"}>
                Voy a necesitar 10 productos para mañana
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <Visibility color="primary"></Visibility>
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : null}
      {vista == 2 ? (
        <Box maxWidth={"400px"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid gainsboro",
              borderRadius: "5px",
              mb: 1,
              p: 1,
            }}
          >
            <Box display={"flex"}>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  backgroundColor: "gainsboro",
                }}
              >
                <ShoppingCart sx={{ color: "white" }}></ShoppingCart>
              </Box>
              <Typography p={1}>Pedido 1</Typography>
            </Box>
            <IconButton onClick={() => setOpenModal(true)}>
              <Visibility
                color="primary"
                sx={{ alignSelf: "right" }}
              ></Visibility>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid gainsboro",
              borderRadius: "5px",
              mb: 1,
              p: 1,
            }}
          >
            <Box display={"flex"}>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  backgroundColor: "gainsboro",
                }}
              >
                <ShoppingCart sx={{ color: "white" }}></ShoppingCart>
              </Box>
              <Typography p={1}>Pedido 2</Typography>
            </Box>
            <IconButton onClick={() => setOpenModal(true)}>
              <Visibility
                color="primary"
                sx={{ alignSelf: "right" }}
              ></Visibility>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid gainsboro",
              borderRadius: "5px",
              mb: 1,
              p: 1,
            }}
          >
            <Box display={"flex"}>
              <Box
                sx={{
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  backgroundColor: "gainsboro",
                }}
              >
                <ShoppingCart sx={{ color: "white" }}></ShoppingCart>
              </Box>
              <Typography p={1}>Pedido 3</Typography>
            </Box>
            <IconButton onClick={() => setOpenModal(true)}>
              <Visibility
                color="primary"
                sx={{ alignSelf: "right" }}
              ></Visibility>
            </IconButton>
          </Box>
        </Box>
      ) : null}
      <ModalComponent
        openModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
      >
        <Box>
          <Typography variant="h5">PEDIDO 1</Typography>
          <Grid container marginBlock={1}>
            <Grid item sm={6}>
              <Typography fontSize={"14px"}>DIRECCION </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                7mo Anillo Banzer
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography fontSize={"14px"}>FECHA </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                15/02/2022
              </Typography>
            </Grid>
          </Grid>

          <TablePedido
            Items={[
              { producto: "Producto 1", cantidadItem: 5, totalItem: 100 },
              { producto: "Producto 3", cantidadItem: 4, totalItem: 120 },
              { producto: "Producto 2", cantidadItem: 6, totalItem: 200 },
            ]}
          ></TablePedido>
          <Box height={1} width={1} mb={1}></Box>
          <Grid container marginBlock={1}>
            <Grid item sm={6}>
              <Typography fontSize={14}>Cantidad: 15</Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography fontSize={14}>Total: Bs. 420</Typography>
            </Grid>
          </Grid>

          <BoxJustifyRight>
            <ButtonBox
              onClickFunction={() => setOpenModal(false)}
              isFill={false}
              label={"Cerrar"}
            ></ButtonBox>
          </BoxJustifyRight>
        </Box>
      </ModalComponent>
    </Box>
  );
};
