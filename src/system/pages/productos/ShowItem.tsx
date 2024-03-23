import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { InputBox } from "../../../componentes/InputBox";
import { useForm } from "react-hook-form";
import { OptionSideBar } from "../../../componentes/OptionSideBar";
import { TableItem } from "./TableItem";
import { ButtonBox } from "../../../componentes/ButtonBox";
import { useState } from "react";
import { listaItems } from "../../../listas/Listas";
import { SideBar } from "../../../navigation/SideBar";

interface Props {
  setOpen: (open: boolean) => void;
  setToastMessage: (toastMessage: string) => void;
  handleCloseDialogForm?: () => void;
}
export const ShowItem = ({}: // setToastMessage,
// setOpen,
Props) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const propUseForm = { register, setValue, getValues };
  const [addItem, setAddItem] = useState(false);
  const handleView = () => {};
  const storeItem = () => {};
  const updateItem = () => {};
  const deleteItem = () => {};
  const getItems = () => {};
  const handleEdit = () => {};
  const handleAddItem = () => {
    setAddItem(!addItem);
  };
  return (
    <Box mt={0}>
      <Grid container sx={{ backgroundColor: "#fcfcfc" }}>
        <Grid item md={2} sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar></SideBar>
        </Grid>
        {/*FORMULARIO Y TABLASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={7} marginInline={1} mt={2}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h6">Item</Typography>
                <ButtonBox
                  onClickFunction={handleAddItem}
                  isFill={true}
                  label={"+ item"}
                ></ButtonBox>
              </Box>
              <Divider></Divider>
            </Grid>
            {addItem ? (
              <>
                <Grid item md={12}>
                  <Card sx={{ minWidth: "100%" }}>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item md={12}>
                          <Typography variant="h6">
                            {" "}
                            Informacion del producto
                          </Typography>
                          {/* <Typography fontSize={9}> Para ingresar mas datos, aprete en detalles</Typography> */}
                          <Divider></Divider>
                        </Grid>

                        <InputBox
                          label={"Nombre"}
                          name={"nombre"}
                          md={8}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Precio"}
                          name={"precio"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Descripcion"}
                          name={"descripcion"}
                          md={12}
                          useForm={propUseForm}
                        ></InputBox>
                        <Grid item md={12} mt={1}>
                          <Typography variant="h6">Mas Detalles</Typography>
                          <Divider></Divider>
                        </Grid>
                        <InputBox
                          label={"Material"}
                          name={"material"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Dimensiones"}
                          name={"dimensiones"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>
                        <InputBox
                          label={"Marca"}
                          name={"marca"}
                          md={4}
                          useForm={propUseForm}
                        ></InputBox>
                        <Grid item md={9} justifyContent={"right"}>
                          <ButtonBox
                            onClickFunction={() => {}}
                            label="Guardar"
                            isFill={true}
                          ></ButtonBox>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ) : null}

            <Grid item md={12} mt={1}>
              <TableItem
                items={listaItems}
                handleEdit={handleEdit}
                handleDelete={function (item_id: number, nombre: string): void {
                  throw new Error("Function not implemented.");
                }}
              ></TableItem>
            </Grid>
          </Grid>
        </Grid>
        {/*GRAFICOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <Grid item md={3}></Grid>
      </Grid>
    </Box>
  );
};
