import { Edit, Flag } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { ModalComponent } from "../../../../componentes/ModalComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SelectColorBox } from "../../../../componentes/SelectColorBox";
import { InputBox } from "../../../../componentes/InputBox";
import { ButtonBox } from "../../../../componentes/ButtonBox";
interface Props {
  info: any;
  color: string;
  isTitle: boolean;
}

export const BoxInforCliente = ({ info, color, isTitle }: Props) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);
  const useFormProps = { register, setValue, getValues };
  return (
    <>
      <Box
        sx={{
          borderLeft: `3px solid ${color}`,
          display: { xs: "none", md: "block" },
          borderRadius: "5px",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            "--Grid-borderWidth": "4px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#F9F9F9",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderColor: "#F9F9F9",
            },
          }}
        >
          {!isTitle ? (
            <>
              <Grid item md={3} padding={1}>
                <Typography>{info.nombre}</Typography>
              </Grid>
              <Grid item md={2} padding={1}>
                <Typography align="right">{info.telefono}</Typography>
              </Grid>
              <Grid item md={1} padding={1}>
                <Box display={"flex"} justifyContent={"center"}>
                  <Flag
                    fontSize="small"
                    sx={{ color: info.colorPrioridad, mr: 1 }}
                  ></Flag>
                </Box>
              </Grid>
              <Grid
                item
                md={2.5}
                padding={1}
                sx={{ backgroundColor: info.colorEtapa }}
              >
                <Typography align="center" color={"white"}>
                  {info.etapa}
                </Typography>
              </Grid>
              <Grid item md={1} padding={1}>
                <Typography align="center">{info.cantidad}</Typography>
              </Grid>
              <Grid item md={2} padding={1}>
                <Typography align="right">
                  {isTitle ? "" : "$us"} {info.ganancias}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={3} padding={1}>
                <Typography align="center" color={"#C2C2C2"}>
                  {info.nombre}
                </Typography>
              </Grid>
              <Grid item md={2} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.telefono}</Typography>
              </Grid>
              <Grid
                item
                md={1}
                padding={1}
                color={"#C2C2C2"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography align="center">{info.prioridad}</Typography>
              </Grid>
              <Grid item md={2.5} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.etapa}</Typography>
              </Grid>
              <Grid
                item
                md={1}
                padding={1}
                color={"#C2C2C2"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <Typography align="center">{info.cantidad}</Typography>
              </Grid>
              <Grid item md={2} padding={1} color={"#C2C2C2"}>
                <Typography align="center">{info.ganancias}</Typography>
              </Grid>
            </>
          )}

          <Grid
            item
            md={0.5}
            padding={1}
            display={"flex"}
            justifyContent={"center"}
          >
            <IconButton sx={{ p: 0 }} onClick={() => setOpenModal(true)}>
              <Edit fontSize="small" color="disabled"></Edit>
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderLeft: `4px solid ${color}`,
          borderRadius: "5px",
          display: { xs: "block", md: "none" },
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            "--Grid-borderWidth": "4px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#F9F9F9",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderColor: "#F9F9F9",
            },
          }}
        >
          <Grid item xs={5} padding={1}>
            <Typography>{info.nombre}</Typography>
          </Grid>
          <Grid item xs={3} padding={1}>
            <Typography align="right">
              {isTitle ? "" : "$us"} {info.ganancias}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            padding={1}
            sx={{ backgroundColor: info.colorEtapa }}
          >
            <Typography align="center" color={"white"}>
              {info.etapa}
            </Typography>
          </Grid>
        </Grid>
        <ModalComponent
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
                useForm={useFormProps}
                md={12}
                sm={12}
              ></InputBox>
              <SelectColorBox
                optionsList={[
                  { prioridad: "Baja", color: "#1FCB71" },
                  { prioridad: "Media", color: "#F5B31D" },
                  { prioridad: "Alta", color: "#F51D5C" },
                ]}
                label={"Prioridad"}
                optionLabel={"prioridad"}
                optionValueId={"prioridad"}
                control={control}
              ></SelectColorBox>
              <SelectColorBox
                sm={6}
                optionsList={[
                  { etapa: "Contacto Inicial", color: "#3498DB" },
                  { etapa: "Seguimiento", color: "#29ABC9" },
                  { etapa: "Negociación", color: "#29C9C2" },
                  { etapa: "Vendido", color: "#1CB68E" },
                ]}
                label={"Etapa"}
                optionLabel={"etapa"}
                optionValueId={"etapa"}
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
        </ModalComponent>
      </Box>
    </>
  );
};
