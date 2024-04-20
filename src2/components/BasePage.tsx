import { useState } from "react";
import { Box, Collapse, Grid, IconButton, Typography } from "@mui/material";
import { BoxDisplay } from "../components/BoxDisplay";
import { ArrowBackIos } from "@mui/icons-material";
import { SideBar } from "../navigation/SideBar";
import { BoxHidden } from "../../src/componentes/BoxHidden";
import Menu from "@mui/icons-material/Menu";

interface Props {
  opcion: any;
  children: JSX.Element | JSX.Element[];
}
export const BasePage = ({ opcion, children }: Props) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const viewMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <Box
      sx={{
        mt: 0,
        // width: { md: "100vw", xs: "100%" },
        minHeight: "100vh",
        backgroundColor: "#F9F9F9",
      }}
    >
      <Grid container>
        <Box
          sx={{
            borderRight: "1px solid gainsboro",
            zIndex: 20,
            backgroundColor: "white",
            position: "absolute",
            height: "100vh",
          }}
        >
          <Collapse orientation="horizontal" in={visibleMenu}>
            <BoxDisplay>
              <IconButton onClick={viewMenu}>
                <ArrowBackIos sx={{ fontSize: "20px" }}></ArrowBackIos>
              </IconButton>
              <Typography fontSize={"18px"} mt={0.5}>
                Volver
              </Typography>
            </BoxDisplay>
            <SideBar opcion={opcion}></SideBar>
          </Collapse>
        </Box>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "block" },
            borderRight: "1px solid gainsboro",
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          <SideBar opcion={opcion}></SideBar>
        </Grid>
        <Grid
          item
          sx={{ width: { xs: "100%", md: "calc(100% - 251px)" }, p: 2 }}
        >
          <BoxDisplay>
            <BoxHidden>
              <IconButton onClick={viewMenu}>
                <Menu></Menu>
              </IconButton>
            </BoxHidden>
            <Typography fontSize={"27px"} sx={{ mt: 0, pl: 1 }}>
              {opcion.titulo}
            </Typography>
          </BoxDisplay>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};
