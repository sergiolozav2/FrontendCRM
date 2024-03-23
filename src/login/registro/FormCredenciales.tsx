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
import { ButtonBox } from "../../componentes/ButtonBox";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";

export const FormCredenciales = () => {
  const { register, setValue, getValues } = useForm();
  const useFormProps = { register, setValue, getValues };
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Box
        sx={{ backgroundColor: "white", width: { xs: "70%", sm: "40%" }, p: 4 }}
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
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 2}
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
                  disabled={activeStep === 0}
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
