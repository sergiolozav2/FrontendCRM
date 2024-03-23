import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";

interface Props {
  //   accesos: RolAcceso[] | null;
  mensajes: any[];
  handleEdit: (mensaje_id: number) => void;
  handleDelete: (mensaje_id: number, nombre: string) => void;
}

export const TableMensaje = ({
  //   accesos,
  mensajes,
  handleDelete,
  handleEdit,
}: Props) => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "mensajeID",
        header: "mensaje",
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "10px" }}>{row.original.mensajeID}</Box>
        ),

        size: 50,
      },
      {
        accessorKey: "nombre",
        header: "Nombre",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "10px" }}>{row.original.nombre}</Box>
        ),

        size: 100,
      },

    //   {
    //     accessorKey: "descripcion",
    //     header: "Descripcion",
    //     enableColumnFilter: false,
    //     Cell: ({ row }) => (
    //       <Box sx={{ fontSize: "10px" }}>{row.original.descripcion}</Box>
    //     ),

    //     size: 200,
    //   },
    //   {
    //     accessorKey: "precio",
    //     header: "Precio",
    //     enableColumnFilter: false,
    //     Cell: ({ row }) => (
    //       <Box sx={{ fontSize: "10px" }}>Bs. {row.original.precio}</Box>
    //     ),
    //     size: 50,
    //   },
    ],
    [mensajes]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={mensajes}
      localization={MRT_Localization_ES}
      enableRowActions
      positionActionsColumn="last"
      initialState={{
        density: "compact",
      }}


      muiTableBodyCellProps={{
        sx: { paddingBlock: 0 },
      }}
      renderRowActions={({ row }) => [
        <Box
          sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
          key={row.id}
        >
          <Tooltip title="Editar">
            <IconButton
              color="primary"
              onClick={() => handleEdit(row.original.mensaje_id)}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar">
            <IconButton
              color="warning"
              onClick={() =>
                handleDelete(row.original.mensaje_id, row.original.nombre)
              }
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>,
      ]}
    />
  );
};
