import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";

interface Props {
  //   accesos: RolAcceso[] | null;
  Items: any[];
}

export const TablePedido = ({ Items }: Props) => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "producto",
        header: "Producto",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.producto}</Box>
        ),
        size: 100,
      },
      {
        accessorKey: "cantidadItem",
        header: "Cantidad",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>{row.original.cantidadItem}</Box>
        ),
        size: 50,
      },
      {
        accessorKey: "totalItem",
        header: "Total",
        Cell: ({ row }) => (
          <Box sx={{ fontSize: "12px" }}>Bs. {row.original.totalItem}</Box>
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
        <Box>
          <Typography variant="h5">{row.original.producto}</Typography>
          <Typography
            fontSize={"14px"}
            sx={{ overflow: "hidden", textOverflow: "ellipsis", pb: 2, pt: 1 }}
          >
            Breve descripcion del producto, que incluye, si hay descuento, que
            caracteristicas tiene y datos necesarios
          </Typography>
          <Grid container>
            <Grid item sm={6} xs={12}>
              <Typography fontSize={"14px"}>CANTIDAD</Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                5 Unidades
              </Typography>
              <Typography fontSize={"14px"}>PRECIO</Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                20 Bs.
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography fontSize={"14px"}>METODO DE PAGO </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                Transaccion
              </Typography>
              <Typography fontSize={"14px"}>TOTAL VENTA </Typography>
              <Typography fontSize={"12px"} pb={1.5}>
                100Bs.
              </Typography>
            </Grid>
            {/* <Grid container mb={1}>
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
            </Grid> */}
          </Grid>
        </Box>
      )}
    />
  );
};
