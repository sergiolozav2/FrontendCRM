import { Box, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { ButtonBox } from "../../../componentes/ButtonBox";
import {
  ArrowBack,
  AttachFile,
  EmailRounded,
  FmdGood,
  ShoppingCart,
  Visibility,
} from "@mui/icons-material";
interface Props {
  setVisibleDetails: (open: boolean) => void;
  visibleDetails: boolean;
}
export const ContactDetails = ({
  setVisibleDetails,
  visibleDetails,
}: Props) => {
  const [vista, setVista] = useState(0);
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
        maxWidth: "400px",
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
        <Box maxWidth={"400px"}>
          <Typography variant="h4">PRODUCTO 1</Typography>
          <Typography
            fontSize={"14px"}
            sx={{ overflow: "hidden", textOverflow: "ellipsis", pb: 2 }}
          >
            Breve descripcion del producto, que incluye, si hay descuento, que
            caracteristicas tiene y datos necesarios
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
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
            <Grid item md={6} xs={12}>
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
            <Grid item md={12} display={"flex"} justifyContent={"right"}>
              <ButtonBox
                label="CONCLUIR PEDIDO"
                isFill
                onClickFunction={() => {}}
              ></ButtonBox>
            </Grid>
          </Grid>
        </Box>
      ) : null}
      {vista == 1 ? (
        <Box maxWidth={"400px"}>
          <Box
            sx={{
              border: "1px solid gainsboro",
              borderRadius: "5px",
              display: "flex",
            }}
          >
            <Box sx={{ backgroundColor: "gainsboro" }}>
              <AttachFile sx={{ color: "white" }}></AttachFile>
            </Box>
            <Box>
              <Typography>Comprobante</Typography>
              <AttachFile></AttachFile>
              <Typography fontSize={"12px"}>comprobante.png</Typography>
            </Box>
            <Visibility sx={{ alignSelf: "right" }}></Visibility>
          </Box>
          <Box sx={{ border: "1px solid gainsboro" }}>
            <FmdGood></FmdGood>
            <Typography>Ubicacion</Typography>
            <Typography fontSize={"12px"}>
              https://maps.app.goo.gl/DBjNWdW4ag6Y1T8z5
            </Typography>
            <Visibility></Visibility>
          </Box>
          <Box sx={{ border: "1px solid gainsboro" }}>
            <EmailRounded></EmailRounded>
            <Typography>Mensaje</Typography>
            <Typography fontSize={"12px"}>
              Voy a necesitar 10 productos para mañana
            </Typography>
            <Visibility></Visibility>
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
            <Visibility
              color="primary"
              sx={{ p: 1, alignSelf: "right" }}
            ></Visibility>
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
            <Visibility
              color="primary"
              sx={{ p: 1, alignSelf: "right" }}
            ></Visibility>
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
            <Visibility
              color="primary"
              sx={{ p: 1, alignSelf: "right" }}
            ></Visibility>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
