import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { InputBox } from "../../../componentes/InputBox";
import { useForm } from "react-hook-form";
import { OptionSideBar } from "../../../componentes/OptionSideBar";
import { ButtonBox } from "../../../componentes/ButtonBox";
import { useState } from "react";
import { listaIntegrantes } from "../../../listas/Listas";
import { CardCliente } from "./components/CardCliente";
import { listaConversacionesc } from "../productos/Datos";
import { SideBar } from "../../../navigation/SideBar";
import { BoxJustifyRight } from "../../../componentes/BoxJustifyRight";
import { ShowEtapa } from "./modulos/ShowEtapas";
import { ShowCategoria } from "./modulos/ShowCategorias";
import { Add, Close, FilterList, Menu, Search } from "@mui/icons-material";
import { BoxDisplay } from "../../../componentes/BoxDisplay";
import { ModalComponent } from "../../../componentes/ModalComponent";
import { SelectColorBox } from "../../../componentes/SelectColorBox";

interface Props {
  setOpen: (open: boolean) => void;
  setToastMessage: (toastMessage: string) => void;
  handleCloseDialogForm?: () => void;
}
export const ShowCliente = ({}: // setToastMessage,
// setOpen,
Props) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const propUseForm = { register, setValue, getValues };
  const [addItem, setAddItem] = useState(false);
  const [opcion, setOpcion] = useState(0);
  const handleAddItem = () => {
    setAddItem(!addItem);
  };
  const [vista, setVista] = useState(0);
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box mt={0} sx={{ backgroundColor: "#F9F9F9" }}>
      <Grid container sx={{ backgroundColor: "#F9F9F9" }}>
        <Grid item sx={{ borderRight: "1px solid gainsboro" }}>
          <SideBar
            opcion={{ titulo: "CLIENTES", opcion: 3, ruta: "/clientes" }}
          ></SideBar>
        </Grid>
        <Grid
          item
          sx={{ width: { xs: "100%", md: "calc(100% - 251px)" } }}
          paddingInline={2}
          mt={2}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} mb={1}>
              <Box display={"flex"}>
                <IconButton sx={{ display: { xs: "block", md: "none" } }}>
                  <Menu></Menu>
                </IconButton>
                <Typography variant="h5" mt={0.5}>
                  CLIENTES
                </Typography>
              </Box>
              {/* <Divider></Divider> */}
            </Grid>
            <Grid
              container
              sx={{
                borderBottom: "1px solid gainsboro",
              }}
            >
              <Grid item sm={4.5}>
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
                    label={"ETAPAS"}
                    {...a11yProps(0)}
                  />
                  <Tab
                    color="secondary"
                    key={2}
                    label={"CATEGORIAS"}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Grid>
              <Grid
                item
                xs={12}
                sm={7.5}
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  mt: { xs: 1, sm: 0 },
                }}
              >
                <Button
                  sx={{ color: "gray" }}
                  onClick={() => setOpenModal(true)}
                >
                  <Add sx={{ m: 0.5, mt: 0, fontSize: 14 }}></Add>

                  <Typography
                    fontSize={"small"}
                    sx={{ display: { xs: "none", md: "block" }, mr: 1 }}
                  >
                    {vista == 1 ? "Categoria" : "Etapa"}
                  </Typography>
                </Button>
                <Divider orientation="vertical"></Divider>
                {opcion == 2 ? (
                  <BoxDisplay>
                    <IconButton onClick={() => {}} sx={{ m: 0 }}>
                      <FilterList
                        sx={{ m: 0.5, mt: 0, fontSize: 14 }}
                      ></FilterList>
                    </IconButton>
                    <TextField
                      size="small"
                      inputProps={{ sx: { fontSize: "12px", p: 1 } }}
                      sx={{ mt: 1, width: "130px" }}
                    ></TextField>
                    <IconButton onClick={() => setOpcion(0)}>
                      <Close sx={{ m: 0.5, mt: 0, fontSize: 14 }}></Close>
                    </IconButton>
                  </BoxDisplay>
                ) : (
                  <Button sx={{ color: "gray" }} onClick={() => setOpcion(2)}>
                    <FilterList
                      sx={{ m: 0.5, mt: 0, fontSize: 14 }}
                    ></FilterList>

                    <Typography
                      fontSize={"small"}
                      sx={{ display: { xs: "none", md: "block" }, mr: 1 }}
                    >
                      Filtrar
                    </Typography>
                  </Button>
                )}
                <Divider orientation="vertical"></Divider>

                {opcion == 3 ? (
                  <BoxDisplay>
                    <IconButton onClick={() => {}} sx={{ m: 0 }}>
                      <Search sx={{ m: 0.5, mt: 0, fontSize: 14 }}></Search>
                    </IconButton>
                    <TextField
                      size="small"
                      inputProps={{ sx: { fontSize: "12px", p: 1 } }}
                      sx={{ mt: 1, width: "130px" }}
                    ></TextField>
                    <IconButton onClick={() => setOpcion(0)}>
                      <Close sx={{ m: 0.5, mt: 0, fontSize: 14 }}></Close>
                    </IconButton>
                  </BoxDisplay>
                ) : (
                  <Button sx={{ color: "gray" }} onClick={() => setOpcion(3)}>
                    <Search sx={{ m: 0.5, mt: 0, fontSize: 14 }}></Search>

                    <Typography
                      fontSize={"small"}
                      sx={{ display: { xs: "none", md: "block" }, mr: 1 }}
                    >
                      Buscar
                    </Typography>
                  </Button>
                )}
              </Grid>
            </Grid>
            {/* <Grid item md={12}>
              <Divider></Divider>
            </Grid> */}
            {vista == 0 ? (
              <ShowEtapa></ShowEtapa>
            ) : (
              <ShowCategoria></ShowCategoria>
            )}
          </Grid>
        </Grid>
        {/*GRAFICOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
      </Grid>
      <ModalComponent
        openModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
      >
        {vista == 1 ? (
          <Box>
            <Typography variant="h5">Categoria</Typography>
            <Divider></Divider>
            <Grid container sx={{ marginBlock: 1.5 }} spacing={1}>
              <InputBox
                sm={6}
                label={"Categoria"}
                name={"Categoria"}
                useForm={propUseForm}
              ></InputBox>
              <SelectColorBox
                sm={6}
                optionsList={[
                  { nombre: "Turquesa", color: "#23E9A5" },
                  { nombre: "Celeste", color: "#63C7FF" },
                  { nombre: "Azul", color: "#3C7BFF" },
                  { nombre: "Violeta", color: "#675BFF" },
                  { nombre: "Lila", color: "#B023E9" },
                  { nombre: "Fucsia", color: "#FB3088" },
                  { nombre: "Rojo", color: "#EF5252" },
                  { nombre: "Naranja", color: "#FD8429" },
                  { nombre: "Amarillo", color: "#FDCB29" },
                  { nombre: "Verde", color: "#A1EA22" },
                ]}
                label={"Color"}
                optionLabel={"nombre"}
                optionValueId={"nombre"}
                control={control}
              ></SelectColorBox>
            </Grid>

            <Grid container spacing={1}>
              <ButtonBox
                onClickFunction={() => {}}
                isFill={true}
                label={"Guardar"}
              ></ButtonBox>
              <ButtonBox
                onClickFunction={() => setOpenModal(false)}
                isFill={false}
                label={"Cancelar"}
              ></ButtonBox>
            </Grid>
          </Box>
        ) : (
          <Box>
            <Typography variant="h5">Etapa</Typography>
            <Divider></Divider>
            <Grid container sx={{ marginBlock: 1.5 }} spacing={1}>
              <InputBox
                sm={6}
                label={"Etapa"}
                name={"etapa"}
                useForm={propUseForm}
              ></InputBox>
              <SelectColorBox
                sm={6}
                optionsList={[
                  { nombre: "1er Etapa", color: "#3498DB" },
                  { nombre: "2da Etapa", color: "#29ABC9" },
                  { nombre: "3ra Etapa", color: "#29C9C2" },
                  { nombre: "4ta Etapa", color: "#1CB68E" },
                  { nombre: "5ta Etapa", color: "#27B563" },
                ]}
                label={"Color"}
                optionLabel={"nombre"}
                optionValueId={"nombre"}
                control={control}
              ></SelectColorBox>
            </Grid>

            <Grid container spacing={1}>
              <ButtonBox
                onClickFunction={() => {}}
                isFill={true}
                label={"Guardar"}
              ></ButtonBox>
              <ButtonBox
                onClickFunction={() => setOpenModal(false)}
                isFill={false}
                label={"Cancelar"}
              ></ButtonBox>
            </Grid>
          </Box>
        )}
      </ModalComponent>
    </Box>
  );
};
