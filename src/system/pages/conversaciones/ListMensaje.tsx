import {
  Box,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { listaMensajes } from "../../../listas/Listas";
import { BoxMensaje } from "./components/BoxMensaje";
import { AccountCircle, ArrowBackIos, Reorder } from "@mui/icons-material";
import { BoxHidden } from "../../../componentes/BoxHidden";
import { useState } from "react";
import { ContactDetails } from "./ContactDetails";

export const ListMensaje = () => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  return (
    <Grid container>
      <Grid item md={12} width={"100%"}>
        <Box>
          <Box sx={{ height: "60px" }}>
            <Box display={"flex"} justifyContent={"space-between"} p={1}>
              <Box display={"flex"}>
                <BoxHidden>
                  <IconButton sx={{ pr: 0 }}>
                    <ArrowBackIos fontSize="small"></ArrowBackIos>
                  </IconButton>
                </BoxHidden>
                <AccountCircle fontSize="large"></AccountCircle>
                <Box mx={1}>
                  <Typography>Juan</Typography>
                  <Typography fontSize={11}>Ult. vez 17:05</Typography>
                </Box>
              </Box>
              <IconButton onClick={() => setVisibleDetails(!visibleDetails)}>
                <Reorder></Reorder>
              </IconButton>
            </Box>

            <Divider color="gainsboro"></Divider>
          </Box>
          <Box sx={{ height: "calc(79vh - 80px)" }} overflow={"auto"} p={1}>
            {listaMensajes.map((conv: any) => (
              <BoxMensaje
                personMessage={conv.personMessage}
                message={conv.message}
                time_message={conv.timeMessage}
              ></BoxMensaje>
            ))}
          </Box>
          <Box p={1} px={2}>
            <TextField
              label={`Nuevo Mensaje  `}
              type="date"
              variant="standard"
              size="small"
              // {...register("tarea")}
              sx={{
                color: "blue",
                width: "100%",
                mt: "4px",
              }}
              InputLabelProps={{
                color: "primary",
              }}
              multiline
              rows={2}
            ></TextField>
          </Box>
        </Box>
      </Grid>
      {visibleDetails ? (
        <Box sx={{ position: "absolute", right: 48 }}>
          <ContactDetails
            visibleDetails={visibleDetails}
            setVisibleDetails={setVisibleDetails}
          ></ContactDetails>
        </Box>
      ) : null}
    </Grid>
  );
}; // setToastMessage,
