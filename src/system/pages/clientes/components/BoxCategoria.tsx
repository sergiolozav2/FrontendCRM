import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { BoxJustifyRight } from "../../../../componentes/BoxJustifyRight";
import { BoxInforCliente } from "./BoxInfoCliente";
import { listaInformacionClientes } from "../../../../listas/Listas";
import { useState } from "react";
import { TitleTable } from "./TitleTable";
interface Props {
  categoria: any;
}
export const BoxCategoria = ({ categoria }: Props) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Grid container>
        <Grid item sm={3.1} xs={5} sx={{ display: "flex" }}>
          <IconButton onClick={() => setVisible(!visible)}>
            {visible ? (
              <KeyboardArrowDown
                sx={{ color: categoria.color }}
              ></KeyboardArrowDown>
            ) : (
              <KeyboardArrowRight
                sx={{ color: categoria.color }}
              ></KeyboardArrowRight>
            )}
          </IconButton>
          <Typography pt={1} color={categoria.color}>
            {categoria.nombre}
          </Typography>
        </Grid>

        {/* <Grid item sm={8} xs={7} sx={{ pt: 1.5 }}>
          <BoxJustifyRight>
            <Typography fontSize={"12px"}>Clientes: </Typography>
            <Typography fontSize={"12px"}>
              {categoria.cantidadClientes}
            </Typography>
          </BoxJustifyRight>
        </Grid> */}
      </Grid>
      <Box
        sx={
          {
            // borderBottom: "1px gainsboro solid",
          }
        }
      >
        {visible ? (
          <>
            <BoxInforCliente
              isTitle
              color={categoria.color}
              info={{
                nombre: "Nombre",
                telefono: "Telefono",
                etapa: "Etapa",
                colorPrioridad: "red",
                colorEtapa: "white",
                prioridad: "Prioridad",
                cantidad: "Cantidad",
                ganancias: "Ganancias",
              }}
            ></BoxInforCliente>
            {listaInformacionClientes
              .filter(
                (cliente: any) => cliente.categoria == categoria.categoria
              )
              .map((cliente: any) => (
                <BoxInforCliente
                  isTitle={false}
                  color={categoria.color}
                  info={cliente}
                ></BoxInforCliente>
              ))}
          </>
        ) : null}
      </Box>
    </>
  );
};
