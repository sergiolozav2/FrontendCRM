import { Delete } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { MediumLabel } from "../../../components/MediumLabel";

interface Props {
  details: any[];
  handleDelete: (campo: number) => void;
}

export const TableDetails = ({ details, handleDelete }: Props) => {
  return (
    <>
      <Grid
        container
        paddingBlock={1}
        // mb={1}
        sx={{
          borderBottom: "1px solid gainsboro",
          paddingInline: 2,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Grid item xs={5}>
          <MediumLabel>
            <>Campo</>
          </MediumLabel>
        </Grid>
        <Grid item xs={5}>
          <MediumLabel>
            <>Valor</>
          </MediumLabel>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"right"}>
          <MediumLabel>
            <>Acciones</>
          </MediumLabel>
        </Grid>
      </Grid>
      {details.map((detail: any) => (
        <Grid
          container
          sx={{
            borderBottom: "1px solid gainsboro",
            pb: 0.5,
            pt: 0.3,
            paddingInline: 2,
          }}
        >
          <Grid item xs={5}>
            <MediumLabel sx={{ mt: 1 }}>{detail.campo}</MediumLabel>
          </Grid>
          <Grid item xs={5}>
            <MediumLabel sx={{ mt: 1 }}>{detail.valor}</MediumLabel>
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"right"}>
            <IconButton size="small" onClick={() => handleDelete(detail.campo)}>
              <Delete fontSize="small" color="warning"></Delete>
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
