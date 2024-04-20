import {
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { SideBar } from "../../../navigation/SideBar";
import { useState } from "react";
import { TableVentaByCliente } from "./TableVentaByCliente";
import { TableVentaByItem } from "./TableVentaByItem";
import { listaVentas, listaVentasByCliente } from "../../../listas/Listas";
import {
  Add,
  KeyboardArrowDown,
  KeyboardArrowRight,
  Menu,
} from "@mui/icons-material";
import { GraphVenta } from "./GraphVenta";
import { TableVentasTop } from "./TableVentasTop";

export const ShowVenta = () => {
  const [vista, setVista] = useState(0);
  const [verGrafico, setVerGrafico] = useState(true);
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box mt={0} sx={{ backgroundColor: "#F9F9F9" }}>
      <Grid container sx={{ backgroundColor: "#F9F9F9" }}>
        <Grid item sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar
            opcion={{ titulo: "VENTAS", opcion: 4, ruta: "/ventas" }}
          ></SideBar>
        </Grid>
        <Grid
          item
          sx={{ width: { xs: "100%", md: "calc(100% - 251px)" } }}
          paddingInline={2}
          mt={2}
        >
          <Grid item xs={12} mb={1}>
            <Box display={"flex"}>
              <IconButton sx={{ display: { xs: "block", md: "none" } }}>
                <Menu></Menu>
              </IconButton>
              <Typography variant="h5" mt={0.5}>
                VENTAS
              </Typography>
            </Box>
            {/* <Divider></Divider> */}
          </Grid>
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
              label={"CLIENTES"}
              //   onClick={() => handleChangeVista(0)}
              {...a11yProps(0)}
            />
            <Tab
              color="secondary"
              key={2}
              label={"ItemS"}
              //   onClick={() => handleChangeVista(1)}
              {...a11yProps(1)}
            />
          </Tabs>
          <Grid item sm={3.1} xs={5} sx={{ display: "flex" }}>
            <IconButton onClick={() => setVerGrafico(!verGrafico)}>
              {verGrafico ? (
                <KeyboardArrowDown color="primary"></KeyboardArrowDown>
              ) : (
                <KeyboardArrowRight color="primary"></KeyboardArrowRight>
              )}
            </IconButton>
            <Typography pt={1} color="primary">
              Graficos
            </Typography>
          </Grid>
          {verGrafico ? (
            <Grid container spacing={2} marginBlock={2} pl={1.5}>
              <Grid
                item
                md={7}
                sm={12}
                sx={{ height: "360px", backgroundColor: "white" }}
              >
                <GraphVenta></GraphVenta>
              </Grid>
              <Grid
                item
                md={5}
                sm={12}
                sx={{ height: "360px", backgroundColor: "white", pr: 3, pt: 3 }}
              >
                <TableVentasTop
                  Items={[
                    {
                      clienteID: 1,
                      clienteNombre: "Cliente 1",
                      itemNombre: "Producto 1",
                      cantidadVendida: 3,
                      totalVendido: 1000,
                    },
                    {
                      clienteID: 2,
                      clienteNombre: "Cliente 2",
                      itemNombre: "Producto 2",
                      cantidadVendida: 2,
                      totalVendido: 1500,
                    },
                    {
                      clienteID: 3,
                      clienteNombre: "Cliente 3",
                      itemNombre: "Producto 3",
                      cantidadVendida: 3,
                      totalVendido: 2000,
                    },
                    {
                      clienteID: 4,
                      clienteNombre: "Cliente 4",
                      itemNombre: "Producto 4",
                      cantidadVendida: 2,
                      totalVendido: 2100,
                    },
                    {
                      clienteID: 5,
                      clienteNombre: "Cliente 5",
                      itemNombre: "Producto 5",
                      cantidadVendida: 2,
                      totalVendido: 2100,
                    },
                  ]}
                  table={vista}
                ></TableVentasTop>
              </Grid>
            </Grid>
          ) : null}
          <Box width={"100%"}>
            {vista == 0 ? (
              <TableVentaByCliente clientes={listaVentasByCliente} />
            ) : (
              <TableVentaByItem Items={listaVentas} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
