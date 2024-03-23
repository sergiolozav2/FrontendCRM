import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SideBar } from "../../../navigation/SideBar";
import { useState } from "react";
import { TableVentaByCliente } from "./TableVentaByCliente";
// import { TableVentaByItem } from "./TableVentaByItem";
// import { listaVentaItems } from "../../../listas/Listas";

export const ShowVenta = () => {
  const [vista, setVista] = useState(0);
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box display={"flex"}>
      <Box width={200}>
        <SideBar></SideBar>
      </Box>
      <Box width={"60%"} padding={2}>
        <Typography variant="h6">Ventas</Typography>
        <Tabs
          sx={{ mb: 1, mt: 0 }}
          value={vista}
          onChange={(_event: React.SyntheticEvent, newValue: number) =>
            setVista(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab
            color="secondary"
            key={1}
            label={"CLIENTES"}
            //   onClick={() => handleChangeVista(0)}
            {...a11yProps(0)}
          />
          <Tab
            color="secondary"
            key={2}
            label={"ItemS"}
            //   onClick={() => handleChangeVista(1)}
            {...a11yProps(1)}
          />
        </Tabs>
        <Box width={"100%"}>
          {vista == 1 ? (
            <TableVentaByCliente clientes={[]} />
          ) : null
          // <TableVentaByItem Items={listaVentaItems} />
          }
        </Box>
      </Box>
    </Box>
  );
};
