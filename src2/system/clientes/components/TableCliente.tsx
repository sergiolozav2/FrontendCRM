import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { MediumLabel } from "../../../components/MediumLabel";
import { useState } from "react";
import {
  Edit,
  Flag,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { InputBox } from "../../../components/InputBox";
import { ModalBox } from "../../../components/ModalBox";
import { SelectColorBox } from "../../../components/SelectColorBox";
import { ButtonBox } from "../../../components/ButtonBox";
import { useForm } from "react-hook-form";
import { listaCategorias, listaEtapas } from "../../../datos/datos";
interface Props {
  clientes: any;
  filtro: any;
  tipo: number;
}
export const TableCliente = ({ clientes, filtro, tipo }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisible] = useState(true);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const openFormCliente = (cliente: any) => {
    setOpenModal(true);
    reset(cliente);
  };
  const propUseForm = { register, setValue, getValues };
  return (
    <Box mb={visible ? 2.5 : 0}>
      <Grid
        container
        sx={{
          borderBottom: "3px solid #F9F9F9",
        }}
      >
        {tipo == 0 ? (
          <>
            <Grid item md={0.5} xs={1} sx={{ p: 1 }}>
              <MediumLabel>
                <strong>ID</strong>
              </MediumLabel>
            </Grid>
            <Grid item md={3} xs={4} sx={{ p: 1 }}>
              <MediumLabel>
                <strong>Nombre</strong>
              </MediumLabel>
            </Grid>
          </>
        ) : (
          <>
            <Grid item md={3.5} xs={5} sx={{ display: "flex" }}>
              <IconButton onClick={() => setVisible(!visible)}>
                {visible ? (
                  <KeyboardArrowDown
                    fontSize="small"
                    sx={{ color: filtro.color }}
                  ></KeyboardArrowDown>
                ) : (
                  <KeyboardArrowRight
                    fontSize="small"
                    sx={{ color: filtro.color }}
                  ></KeyboardArrowRight>
                )}
              </IconButton>
              <Typography pt={1} fontSize={15} color={filtro.color}>
                {filtro.nombre}
              </Typography>
            </Grid>
          </>
        )}
        {visible ? (
          <>
            <Grid
              item
              md={2}
              sx={{ p: 1, display: { xs: "none", md: "block" } }}
            >
              <MediumLabel>
                <strong>Telefono</strong>
              </MediumLabel>
            </Grid>
            {tipo != 2 ? (
              <Grid item md={2} xs={3} sx={{ p: 1, textAlign: "center" }}>
                <MediumLabel>
                  <strong>Etapa</strong>
                </MediumLabel>
              </Grid>
            ) : null}
            {tipo != 3 ? (
              <Grid
                item
                md={2}
                sx={{
                  p: 1,
                  textAlign: "center",
                  display: { xs: "none", md: "block" },
                }}
              >
                <MediumLabel>
                  <strong>Prioridad</strong>
                </MediumLabel>
              </Grid>
            ) : null}
            {tipo != 1 ? (
              <Grid item md={2} xs={3} sx={{ p: 1 }}>
                <MediumLabel>
                  <strong>Categoría</strong>
                </MediumLabel>
              </Grid>
            ) : null}
            {tipo > 0 ? (
              <Grid
                item
                md={2}
                xs={3}
                p={1}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <MediumLabel>
                  <strong>Ganancias</strong>
                </MediumLabel>
              </Grid>
            ) : null}
            <Grid item md={0.5} xs={1}></Grid>
          </>
        ) : null}
      </Grid>
      <Box
        sx={
          {
            // borderBottom: "1px gainsboro solid",
          }
        }
      >
        {visible ? (
          <>
            <Box>
              {clientes
                .filter((cliente: any) =>
                  tipo == 1
                    ? cliente.categoria == filtro.categoria
                    : tipo == 2
                    ? cliente.etapa == filtro.etapa
                    : tipo == 3
                    ? cliente.prioridad == filtro.prioridad
                    : cliente.clienteID > 0
                )
                .map((item: any) => (
                  <Grid
                    container
                    sx={{
                      borderLeft: `4px solid ${filtro.color}`,
                      borderBottom: "3px solid #F9F9F9",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item md={0.5} xs={1} p={1.5}>
                      <MediumLabel>{item.clienteID}</MediumLabel>
                    </Grid>
                    <Grid item md={3} xs={4} p={1.5} sx={{ display: "flex" }}>
                      <img
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "15px",
                          marginRight: "4px",
                        }}
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      ></img>
                      <MediumLabel>{item.nombre}</MediumLabel>
                    </Grid>
                    <Grid
                      item
                      md={2}
                      p={1.5}
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      <MediumLabel>{item.telefono}</MediumLabel>
                    </Grid>
                    {tipo != 2 ? (
                      <Grid
                        item
                        xs={3}
                        md={2}
                        sx={{
                          p: 1.5,
                          textAlign: "center",
                          color: "white",
                          backgroundColor: item.colorEtapa,
                        }}
                      >
                        <MediumLabel>{item.etapaNombre}</MediumLabel>
                      </Grid>
                    ) : null}
                    {tipo != 3 ? (
                      <Grid
                        item
                        md={2}
                        padding={1.5}
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          <Flag
                            fontSize="small"
                            sx={{ color: item.prioridadColor, mr: 1 }}
                          ></Flag>
                        </Box>
                      </Grid>
                    ) : null}
                    {tipo != 1 ? (
                      <Grid item xs={3} md={2} p={1.5} display={"flex"}>
                        <MediumLabel
                          sx={{
                            width: "100%",
                            pl: 1,
                            borderRadius: "4px",
                            borderLeft: `4px solid ${item.categoriaColor}`,
                          }}
                        >
                          {item.categoriaNombre}
                        </MediumLabel>
                      </Grid>
                    ) : null}
                    {tipo > 0 ? (
                      <Grid
                        item
                        md={2}
                        p={1.5}
                        xs={3}
                        sx={{ display: { xs: "none", md: "block" } }}
                      >
                        <MediumLabel>Bs. {item.ganancias}</MediumLabel>
                      </Grid>
                    ) : null}
                    <Grid item md={0.5} xs={1} pt={0.8}>
                      <IconButton
                        sx={{ p: 0 }}
                        onClick={() => openFormCliente(item)}
                      >
                        <Edit fontSize="small" color="disabled"></Edit>
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
            </Box>
          </>
        ) : null}
      </Box>
      <ModalBox
        openModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
      >
        <Box>
          <Typography variant="h6">Cliente</Typography>
          <Divider></Divider>
          <Grid container spacing={1} marginBlock={1}>
            <InputBox
              label={"Nombre"}
              name={"nombre"}
              useForm={propUseForm}
              sm={12}
            ></InputBox>
            <InputBox
              label={"Email"}
              name={"email"}
              useForm={propUseForm}
              sm={8}
            ></InputBox>
            <InputBox
              label={"Telefono"}
              name={"telefono"}
              disabled
              useForm={propUseForm}
              sm={4}
            ></InputBox>
            <SelectColorBox
              optionsList={[
                { prioridad: "Baja", color: "#1FCB71" },
                { prioridad: "Media", color: "#F5B31D" },
                { prioridad: "Alta", color: "#F51D5C" },
              ]}
              sm={4}
              label={"Prioridad"}
              optionLabel={"prioridad"}
              optionValueId={"prioridad"}
              control={control}
            ></SelectColorBox>
            <SelectColorBox
              sm={4}
              optionsList={listaEtapas}
              label={"Etapa"}
              optionLabel={"nombre"}
              optionValueId={"etapa"}
              control={control}
            ></SelectColorBox>
            <SelectColorBox
              sm={4}
              optionsList={listaCategorias}
              label={"Categoria"}
              optionLabel={"nombre"}
              optionValueId={"categoria"}
              control={control}
            ></SelectColorBox>
          </Grid>
          <Grid
            container
            spacing={1}
            mt={1}
            display={"flex"}
            justifyContent={"right"}
          >
            <ButtonBox
              onClickFunction={() => setOpenModal(false)}
              isFill
              label={"Guardar"}
            ></ButtonBox>
            <ButtonBox
              onClickFunction={() => setOpenModal(false)}
              isFill={false}
              label={"Cancelar"}
            ></ButtonBox>
          </Grid>
        </Box>
      </ModalBox>
    </Box>
  );
};
