import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { TableVentaDetail } from "./TableVentaDetail";

interface Props {
  //   accesos: RolAcceso[] | null;
  clientes: any[];
}

export const TableVentaByCliente = ({ clientes }: Props) => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "clienteID",
        header: "cliente",
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.clienteID}</Box>
        ),

        size: 50,
      },
      {
        accessorKey: "clienteNombre",
        header: "Nombre",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.clienteNombre}</Box>
        ),

        size: 100,
      },
      {
        accessorKey: "cantidadItem",
        header: "Items Vendidos",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.cantidadItem}</Box>
        ),

        size: 100,
      },
      {
        accessorKey: "totalItem",
        header: "Total Vendido",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.totalItem}</Box>
        ),

        size: 100,
      },
    ],
    [clientes]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={clientes}
      localization={MRT_Localization_ES}
      enableRowActions
      positionActionsColumn="last"
      initialState={
        {
          // density: "compact",
        }
      }
      muiTableBodyCellProps={{
        sx: { paddingBlock: 0 },
      }}
      renderDetailPanel={({ row }) => (
        <>
          <TableVentaDetail ventas={row.original.ventas} tipo={2} />
        </>
      )}
    />
  );
};
