// import { Delete, Edit } from "@mui/icons-material";
// import { Box, IconButton, Tooltip } from "@mui/material";
// import { useMemo } from "react";
// import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
// import { MRT_Localization_ES } from "material-react-table/locales/es";

// interface Props {
//   //   accesos: RolAcceso[] | null;
//   integrantes: any[];
//   handleEdit: (integranteID: number) => void;
//   handleDelete: (integranteID: number, nombre: string) => void;
// }

// export const TableIntegrante = ({
//   //   accesos,
//   integrantes,
//   handleDelete,
//   handleEdit,
// }: Props) => {
//   const columns = useMemo<MRT_ColumnDef<any>[]>(
//     () => [
//       {
//         accessorKey: "integranteID",
//         header: "Integrante",
//         enableColumnFilter: false,
//         Cell: ({ row }) => (
//           <Box sx={{ fontSize: "10px" }}>{row.original.integranteID}</Box>
//         ),

//         size: 50,
//       },
//       {
//         accessorKey: "nombre",
//         header: "Nombre",
//         Cell: ({ row }) => (
//           <Box sx={{ fontSize: "10px" }}>{row.original.nombre}</Box>
//         ),

//         size: 100,
//       },

//       {
//         accessorKey: "cargo",
//         header: "Cargo",
//         enableColumnFilter: false,
//         Cell: ({ row }) => (
//           <Box sx={{ fontSize: "10px" }}>{row.original.cargo}</Box>
//         ),

//         size: 200,
//       },
//       {
//         accessorKey: "telefono",
//         header: "Telefono",
//         enableColumnFilter: false,
//         Cell: ({ row }) => (
//           <Box sx={{ fontSize: "10px" }}>{row.original.telefono}</Box>
//         ),
//         size: 50,
//       },
//     ],
//     [integrantes]
//   );

//   return (
//     <MaterialReactTable
//       columns={columns}
//       data={integrantes}
//       localization={MRT_Localization_ES}
//       enableRowActions
//       positionActionsColumn="last"
//       initialState={{
//         density: "compact",
//       }}

//       muiTableBodyCellProps={{
//         sx: { paddingBlock: 0 },
//       }}
//       renderRowActions={({ row }) => [
//         <Box
//           sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
//           key={row.id}
//         >
//           <Tooltip title="Editar">
//             <IconButton
//               color="primary"
//               onClick={() => handleEdit(row.original.integranteID)}
//             >
//               <Edit />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Eliminar">
//             <IconButton
//               color="warning"
//               onClick={() =>
//                 handleDelete(row.original.integranteID, row.original.nombre)
//               }
//             >
//               <Delete />
//             </IconButton>
//           </Tooltip>
//         </Box>,
//       ]}
//     />
//   );
// };
