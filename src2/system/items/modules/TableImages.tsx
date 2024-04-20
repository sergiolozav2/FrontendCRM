import { Delete, Visibility } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { MediumLabel } from "../../../components/MediumLabel";

interface Props {
  images: any[];
  handleDelete: (campo: number) => void;
  handleView: (file: any) => void;
}

export const TableImages = ({ images, handleDelete, handleView }: Props) => {
  return (
    <>
      <Grid
        container
        paddingBlock={1}
        paddingInline={2}
        sx={{ borderBottom: "1px solid gainsboro", backgroundColor: "#f9f9f9" }}
      >
        <Grid item xs={8}>
          <MediumLabel>
            <>Imagen</>
          </MediumLabel>
        </Grid>
        <Grid item xs={4} display={"flex"} justifyContent={"right"}>
          <MediumLabel>
            <>Acciones</>
          </MediumLabel>
        </Grid>
      </Grid>
      {images.map((detail: any) => (
        <Grid
          container
          paddingInline={2}
          sx={{ borderBottom: "1px solid gainsboro", pb: 0.5, pt: 0.3 }}
        >
          <Grid item xs={8}>
            <MediumLabel sx={{ mt: 1 }}>{detail.nombre}</MediumLabel>
          </Grid>

          <Grid item xs={4} display={"flex"} justifyContent={"right"}>
            <IconButton size="small" onClick={() => handleView(detail.nombre)}>
              <Visibility fontSize="small" color="primary"></Visibility>
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleDelete(detail.nombre)}
            >
              <Delete fontSize="small" color="warning"></Delete>
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
