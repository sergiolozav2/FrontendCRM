import { Box, Divider, Grid, Typography } from "@mui/material";
import { LoginInputBox } from "../../componentes/LoginInputBox";
import { useForm } from "react-hook-form";
import { ButtonBox } from "../../componentes/ButtonBox";
import { useNavigate } from "react-router-dom";

export const FormInformacion = () => {
  const { register, setValue, getValues } = useForm();
  const useFormProps = { register, setValue, getValues };
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #4F45C9 , #5596D4)",
        height: "100vh",
      }}
    >
      <Box
        sx={{ backgroundColor: "white", width: { xs: "70%", sm: "40%" }, p: 4 }}
      >
        <Grid container spacing={1}>
          <Grid item md={12}>
            <Typography>Confirmación de Datos</Typography>
          </Grid>
          <Grid item md={12} mb={1}>
            <Divider></Divider>
          </Grid>
          <LoginInputBox
            md={12}
            label={"Nombre"}
            name={"nombre"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Apellido Paterno"}
            name={"apellido"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Apellido Materno"}
            name={"segundoApellido"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            md={12}
            label={"Nombre de la Empresa"}
            name={"nombreEmpresa"}
            useForm={useFormProps}
          ></LoginInputBox>
          <Grid item md={12} marginBlock={1}>
            <Divider></Divider>
          </Grid>
          <LoginInputBox
            md={12}
            label={"Correo"}
            name={"correo"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Telefono"}
            name={"telefono"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Contraseña"}
            name={"password"}
            useForm={useFormProps}
          ></LoginInputBox>
          <Grid item md={12} marginBlock={1}>
            <Divider ></Divider>
          </Grid>
          <LoginInputBox
            md={12}
            label={"Nombre de la Empresa"}
            name={"nombreEmpresa"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Cantidad de Empleados"}
            name={"cantidadEmpleados"}
            useForm={useFormProps}
          ></LoginInputBox>
          <LoginInputBox
            label={"Cantidad de Dispositivos"}
            name={"cantidadDispositivos"}
            useForm={useFormProps}
          ></LoginInputBox>

          <ButtonBox
            onClickFunction={() => navigate("/registros")}
            isFill={false}
            label={"Volver"}
          ></ButtonBox>
          <ButtonBox
            onClickFunction={() => navigate("/loginp")}
            isFill={true}
            label={"Guardar Información"}
          ></ButtonBox>
        </Grid>
      </Box>
    </Box>
  );
};
