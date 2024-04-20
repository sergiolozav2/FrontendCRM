import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { TableVentaDetail } from "./TableVentaDetail";

interface Props {
  //   accesos: RolAcceso[] | null;
  Items: any[];
}

export const TableVentaByItem = ({ Items }: Props) => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "itemID",
        header: "ID",
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.itemID}</Box>
        ),
        size: 25,
      },
      {
        accessorKey: "itemNombre",
        header: "Nombre",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.itemNombre}</Box>
        ),
        size: 200,
      },
      {
        accessorKey: "cantidadItem",
        header: "Cantidad",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.cantidadItem}</Box>
        ),
        size: 100,
      },
      {
        accessorKey: "totalItem",
        header: "Total",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.totalItem}</Box>
        ),
        size: 100,
      },
    ],
    [Items]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={Items}
      localization={MRT_Localization_ES}
      muiTableBodyCellProps={{
        sx: { paddingBlock: 0 },
      }}
      renderDetailPanel={({ row }) => (
        <Box sx={{ backgroundColor: "#F9F9F9" }}>
          <TableVentaDetail ventas={row.original.ventas} tipo={1} />
        </Box>
      )}
    />
  );
};
