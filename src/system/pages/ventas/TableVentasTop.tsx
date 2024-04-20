import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { TableVentaDetail } from "./TableVentaDetail";

interface Props {
  //   accesos: RolAcceso[] | null;
  Items: any[];
  table: number;
}

export const TableVentasTop = ({ Items, table }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f9f9f9" }}>
          <TableRow>
            <TableCell width={"20%"}>ID</TableCell>
            <TableCell width={"50%"}>
              {table == 1 ? "Cliente" : "Producto"}
            </TableCell>
            <TableCell width={"15%"}>Cantidad</TableCell>
            <TableCell width={"15%"}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Items?.map((field: any, index: any) => (
            <TableRow key={index}>
              <TableCell width={"20%"} sx={{ paddingLeft: 2 }}>
                {index + 1}
              </TableCell>
              <TableCell width={"50%"} sx={{ paddingLeft: 2 }}>
                {field.clienteNombre}
              </TableCell>
              <TableCell width={"15%"} sx={{ paddingLeft: 2 }}>
                {field.cantidadVendida}
              </TableCell>
              <TableCell width={"15%"} sx={{ paddingLeft: 2 }}>
                {field.totalVendido}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
