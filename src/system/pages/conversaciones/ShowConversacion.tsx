import { Box, Grid } from "@mui/material";
import { ListConversacion } from "./ListConversacion";
import { ListMensaje } from "./ListMensaje";
import { SideBar } from "../../../navigation/SideBar";

export const ShowConversacion = () => {
  return (
    <Box mt={0}>
      <Grid container sx={{ backgroundColor: "#fcfcfc" }}>
        <Grid item sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar></SideBar>
        </Grid>
        <Grid item sx={{ width: { xs: "100%", md: "calc(100% - 251px)" } }}>
          <Box display={"flex"} sx={{ backgroundColor: "#EAEAEA" }}>
            <Box p={4} px={6} width={"100%"}>
              <Box sx={{ backgroundColor: "white" }} display={"flex"}>
                <Box width={"245px"} display={{ xs: "none", sm: "flex" }}>
                  <ListConversacion></ListConversacion>
                </Box>
                <ListMensaje></ListMensaje>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; // setToastMessage,
