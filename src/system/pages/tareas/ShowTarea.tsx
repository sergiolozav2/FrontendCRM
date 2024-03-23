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
//   import { TableItem } from "./TableItem";
import { ButtonBox } from "../../../componentes/ButtonBox";
import { useState } from "react";
import { BoxTarea } from "./components/BoxTarea";
import { listaTareas } from "../../../listas/Listas";
import { SideBar } from "../../../navigation/SideBar";

interface Props {
  setOpen: (open: boolean) => void;
  setToastMessage: (toastMessage: string) => void;
  handleCloseDialogForm?: () => void;
}
export const ShowTarea = ({}: // setToastMessage,
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
    <Box sx={{ display: "flex" }}>
      <SideBar></SideBar>
      <Box
        width={{ md: "calc(100vw - 175px)", xs: "100vw" }}
        sx={{ backgroundColor: "#FeFcFc", p: 2 }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6">Tareas</Typography>
          <ButtonBox
            onClickFunction={handleAddItem}
            isFill={true}
            label={"+ item"}
          ></ButtonBox>
        </Box>
        <Divider></Divider>
        {addItem ? (
          <>
            <Grid item md={12}>
              <Card sx={{ minWidth: "100%" }}>
                <CardContent>
                  <Grid container spacing={1}>
                    <InputBox
                      label={"Descripcion"}
                      name={"descripcion"}
                      md={9}
                      multiline={true}
                      rows={3}
                      useForm={propUseForm}
                    ></InputBox>
                    <Grid item md={3}>
                      <InputBox
                        label={"Fecha"}
                        name={"fecha"}
                        md={12}
                        useForm={propUseForm}
                      ></InputBox>
                      <Box mt={2}>
                        <InputBox
                          label={"Cliente"}
                          name={"cliente"}
                          md={12}
                          useForm={propUseForm}
                        ></InputBox>
                      </Box>
                    </Grid>

                    <Grid item md={9} justifyContent={"right"}>
                      <ButtonBox
                        onClickFunction={() => {}}
                        label="Agregar"
                        isFill={true}
                      ></ButtonBox>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </>
        ) : null}

        <Grid item xs={12} md={12} mt={1}>
          <Box
            sx={{
              borderRadius: "10px",
              border: "1px solid gainsboro",
              backgroundColor: "white",
            }}
          >
            {listaTareas.map((tarea: any) => (
              <BoxTarea
                tarea={tarea}
                openEdit={false}
                withGrupo={false}
                abrirEdicion={function (tarea: any): void {
                  throw new Error("Function not implemented.");
                }}
                setOpen={function (open: boolean): void {
                  throw new Error("Function not implemented.");
                }}
                setToastMessage={function (toastMessage: string): void {
                  throw new Error("Function not implemented.");
                }}
                verTarea={function (tarea_id: any): void {
                  throw new Error("Function not implemented.");
                }}
                getTareas={function (opcion: any): void {
                  throw new Error("Function not implemented.");
                }}
              ></BoxTarea>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
