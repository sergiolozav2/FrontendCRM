import { Box, Button, Divider, Tab, Tabs } from "@mui/material";
import { BasePage } from "../../components/BasePage";
import { useState } from "react";
import { BoxSpaceBetween } from "../../../src/componentes/BoxSpaceBetween";
import { Add, Upload } from "@mui/icons-material";
import { BoxDisplay } from "../../components/BoxDisplay";
import { BoxHidden } from "../../components/BoxHidden";
import { TableItem } from "./modules/TableItem";
import { listaItems } from "../../datos/datos";
import { ModalBox } from "../../components/ModalBox";
import { FormItem } from "./modules/FormItem";
export const ItemPage = () => {
  const [vista, setVista] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <BasePage opcion={{ titulo: "Items", opcion: 2, ruta: "/items" }}>
      <BoxSpaceBetween>
        <Tabs
          value={vista}
          onChange={(_event: React.SyntheticEvent, newValue: number) =>
            setVista(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab
            color="secondary"
            key={1}
            label={"LISTA DE ITEMS"}
            {...a11yProps(0)}
          />
          <Tab
            color="secondary"
            key={2}
            label={"PROMOCIONES"}
            {...a11yProps(1)}
          />
        </Tabs>
        <BoxDisplay>
          <Button onClick={handleModal}>
            <Add></Add>
            <BoxHidden>
              <>Nuevo Item</>
            </BoxHidden>
          </Button>
          <Divider orientation="vertical"></Divider>
          <Button>
            <Upload></Upload>
            <BoxHidden>
              <>Cargar Items</>
            </BoxHidden>
          </Button>
        </BoxDisplay>
      </BoxSpaceBetween>

      <Divider></Divider>
      <>{openModal ? <FormItem></FormItem> : null}</>
      <Box mt={2}>
        <TableItem items={listaItems}></TableItem>
      </Box>
      {/* <ModalBox expanded openModal={openModal} handleCloseModal={handleModal}>
        <FormItem></FormItem>
      </ModalBox> */}
    </BasePage>
  );
};
