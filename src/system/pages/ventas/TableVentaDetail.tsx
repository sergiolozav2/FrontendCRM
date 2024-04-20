import {
  Box,
  Divider,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
interface Props {
  ventas: any[];
  tipo: any;
}
export const TableVentaDetail = ({ ventas, tipo }: Props) => {
  console.log(ventas);
  return (
    <Box pl={9} pr={1} sx={{ backgroundColor: "#F9F9F9" }}>
      <Box
        sx={{
          display: "flex",
          fontSize: "12px",
          p: 1,
          borderLeft: "5px solid #F9F9F9",
        }}
      >
        <Box width={"5%"}>
          <strong>ID</strong>
        </Box>
        <Box width={"25%"}>
          <strong>Nombre</strong>
        </Box>
        <Box width={"15%"}>
          <strong> Cantidad</strong>
        </Box>
        <Box width={"10%"}>
          <strong> Precio</strong>
        </Box>
        <Box width={"15%"}>
          <strong>Total</strong>
        </Box>
        <Box width={"15%"}>
          <strong> Fecha</strong>
        </Box>
        <Box width={"15%"}>
          <strong> Tipo Pago</strong>
        </Box>
      </Box>
      <Divider></Divider>
      <Box width={"100%"} sx={{ pr: 1, pb: 1 }}>
        {ventas.map((venta: any, index: any) => (
          <>
            <Box
              key={index}
              sx={{
                display: "flex",
                fontSize: "12px",
                p: 1,
                backgroundColor: "white",
                borderRadius: "3px",
                borderLeft: "5px solid #338DE7",
              }}
            >
              <Box width={"5%"}>
                {tipo == 1 ? venta.clienteID : venta.itemID}
              </Box>
              <Box width={"25%"}>
                {tipo == 1 ? venta.clienteNombre : venta.productoNombre}
              </Box>
              <Box width={"15%"}>{venta.cantidadItem}</Box>
              <Box width={"10%"}>{venta.precioItem}</Box>
              <Box width={"15%"}>{venta.totalItem}</Box>
              <Box width={"15%"}>{venta.fecha}</Box>
              <Box width={"15%"}>{venta.tipoPago}</Box>
            </Box>
            <Box sx={{ width: 5, height: 3, backgroundColor: "#F9F9F9" }}></Box>
          </>
        ))}
      </Box>
    </Box>
  );
};
