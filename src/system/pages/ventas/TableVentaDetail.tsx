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
    <Box pl={9}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {/* <TableHead>
            <TableRow>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                {tipo == 1 ? "Cliente" : "Item"}
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Nombre
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Cantidad
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Precio
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Total
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Fecha
              </TableCell>
              <TableCell sx={{ paddingBlock: 1, fontSize: "11px" }}>
                Tipo Pago
              </TableCell>
            </TableRow>
          </TableHead> */}

          {/* {ventas.map((venta: any, index: any) => (
            <TableRow
              key={index}
              sx={{
                fontSize: "10px",
                mb: 1,
                borderLeft: "5px solid blue",
              }}
            >
              <TableCell
                width={"15%"}
                sx={{ paddingBlock: 0, fontSize: "11px" }}
              >
                {tipo == 1 ? venta.clienteID : venta.itemID}
              </TableCell>
              <TableCell
                width={"15%"}
                sx={{ paddingBlock: 0, fontSize: "11px" }}
              >
                {tipo == 1 ? venta.clienteNombre : venta.productoNombre}
              </TableCell>
              <TableCell
                width={"15%"}
                sx={{ paddingBlock: 0, fontSize: "11px" }}
              >
                {venta.cantidadItem}
              </TableCell>
              <TableCell
                width={"25%"}
                sx={{ paddingBlock: 0, fontSize: "11px" }}
              >
                {venta.precioItem}
              </TableCell>
              <TableCell
                width={"25%"}
                sx={{ paddingLeft: 2.2, fontSize: "11px" }}
              >
                {venta.totalItem}
              </TableCell>
              <TableCell
                width={"40%"}
                sx={{ paddingLeft: 2, fontSize: "11px" }}
              >
                {venta.fecha}
              </TableCell>
              <TableCell
                width={"40%"}
                sx={{ paddingLeft: 2, fontSize: "11px" }}
              >
                {venta.tipoPago}
              </TableCell>
            </TableRow>
          ))} */}
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          fontSize: "11px",
          p: 1,
          borderLeft: "5px solid white",
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
      {ventas.map((venta: any, index: any) => (
        <Box>
          <Box
            key={index}
            sx={{
              display: "flex",
              width: "100%",
              fontSize: "10px",
              p: 1,
              borderLeft: "5px solid blue",
            }}
          >
            <Box width={"5%"}>{tipo == 1 ? venta.clienteID : venta.itemID}</Box>
            <Box width={"25%"}>
              {tipo == 1 ? venta.clienteNombre : venta.productoNombre}
            </Box>
            <Box width={"15%"}>{venta.cantidadItem}</Box>
            <Box width={"10%"}>{venta.precioItem}</Box>
            <Box width={"15%"}>{venta.totalItem}</Box>
            <Box width={"15%"}>{venta.fecha}</Box>
            <Box width={"15%"}>{venta.tipoPago}</Box>
          </Box>
          <Divider></Divider>
        </Box>
      ))}
    </Box>
  );
};
