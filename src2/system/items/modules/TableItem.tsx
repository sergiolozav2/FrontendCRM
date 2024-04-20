import { Box, Grid, Switch } from "@mui/material";
import { BoxHidden } from "../../../components/BoxHidden";
import { MediumLabel } from "../../../components/MediumLabel";
interface Props {
  items: any;
}
export const TableItem = ({ items }: Props) => {
  return (
    <Box>
      <Grid
        container
        sx={{
          p: 1.5,
          borderBottom: "3px solid #F9F9F9",
        }}
      >
        <Grid item md={1} xs={2}>
          <MediumLabel>
            <strong>ID</strong>
          </MediumLabel>
        </Grid>
        <Grid item md={3} xs={4}>
          <MediumLabel>
            <strong>Nombre</strong>
          </MediumLabel>
        </Grid>
        <Grid item md={1} xs={2}>
          <MediumLabel>
            <strong>Estado</strong>
          </MediumLabel>
        </Grid>
        <Grid item md={3} xs={4}>
          <MediumLabel>
            <strong>Precio</strong>
          </MediumLabel>
        </Grid>
        <BoxHidden>
          <Grid item md={4} xs={0}>
            <MediumLabel>
              <strong>Descripcion</strong>
            </MediumLabel>
          </Grid>
        </BoxHidden>
      </Grid>
      {items.map((item: any) => (
        <Grid
          container
          sx={{
            p: 1.5,
            borderBottom: "3px solid #F9F9F9",
            backgroundColor: "white",
          }}
        >
          <Grid item md={1} xs={2}>
            <MediumLabel>{item.itemID}</MediumLabel>
          </Grid>
          <Grid item md={3} xs={4}>
            <MediumLabel>{item.nombre}</MediumLabel>
          </Grid>
          <Grid item md={1} xs={2}>
            <Switch
              size="small"
              {...{ inputProps: { "aria-label": "Switch demo" } }}
              defaultChecked
            />
            <MediumLabel>{item.disponibilidad}</MediumLabel>
          </Grid>
          <Grid item md={3} xs={4}>
            <MediumLabel>
              {item.precio} {item.moneda}
            </MediumLabel>
          </Grid>
          <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
            <MediumLabel>{item.descripcion}</MediumLabel>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
