import {
  Box,
  Button,
  Grid,
  MobileStepper,
  Typography,
  useTheme,
} from "@mui/material";
import { LoginInputBox } from "../../componentes/LoginInputBox";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { AuthService } from "../../client";

export const FormRegistro = () => {
  const { register, setValue, getValues, handleSubmit } = useForm();
  const useFormProps = { register, setValue, getValues };
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    password: "",
    correo: "",
    telefono: "",
    segundoApellido: "",
    verificado: true,
  });
  const [empresa, setEmpresa] = useState({
    nombreEmpresa: "",
  });
  const [response, setResponse] = useState();

  const handleNext = (data: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep == 2) {
      navigate("/informacion");
      submitForm(data);
    }
  };
  const submitForm = async (data: any) => {
    if (activeStep == 2) {
      console.log(data);
      AuthService.postAuthRegister({
        usuario,
        empresa,
      })
        .then((result) => {
          setResponse(result);
        })
        .catch((error) => {
          setResponse(error);
        });
    }
  };
  const handleBack = () => {
    console.log();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (activeStep == 0) {
      navigate("/loginp");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #4F45C9 , #5596D4)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ backgroundColor: "white", width: { xs: "80%", md: "40%" }, p: 4 }}
      >
        <Grid container spacing={1}>
          {activeStep == 0 ? (
            <>
              <Grid item md={12}>
                <Typography variant="h6">REGISTRO</Typography>
              </Grid>
              <LoginInputBox
                md={12}
                label={"Nombre"}
                name={"nombre"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Apellido Paterno"}
                name={"apellido"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Apellido Materno"}
                name={"segundoApellido"}
                useForm={useFormProps}
              ></LoginInputBox>
            </>
          ) : activeStep == 1 ? (
            <>
              <Grid item md={12}>
                <Typography variant="h6">CREDENCIALES</Typography>
              </Grid>
              <LoginInputBox
                md={12}
                label={"Correo"}
                name={"correo"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Telefono"}
                name={"telefono"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Contraseña"}
                name={"password"}
                useForm={useFormProps}
              ></LoginInputBox>
            </>
          ) : (
            <>
              <Grid item md={12}>
                <Typography variant="h6"> EMPRESA</Typography>
              </Grid>
              <LoginInputBox
                md={12}
                label={"Nombre de la Empresa"}
                name={"nombreEmpresa"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Cantidad de Empleados"}
                name={"cantidadEmpleados"}
                useForm={useFormProps}
              ></LoginInputBox>
              <LoginInputBox
                md={12}
                label={"Cantidad de Dispositivos"}
                name={"cantidadDispositivos"}
                useForm={useFormProps}
              ></LoginInputBox>
            </>
          )}
          <Grid item xs={12}>
            <MobileStepper
              variant="progress"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Button
                  type="submit"
                  size="small"
                  onClick={handleNext}

                  //   disabled={activeStep === 2}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  //   disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
