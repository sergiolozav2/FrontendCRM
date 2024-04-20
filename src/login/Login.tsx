import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BoxDisplay } from "../componentes/BoxDisplay";
import { AccountCircle } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { AuthService } from "../client";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const { register, setValue, getValues, handleSubmit } = useForm();
  const [response, setResponse] = useState(undefined);

  const submitForm = async (data: any) => {
    console.log(data);
    AuthService.postAuthLogin(data)
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        setResponse(error);
      });
  };
  return (
    <BoxDisplay>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: { xs: "100vw", md: "50vw" },
          background: {
            xs: "linear-gradient(to bottom right, #4F45C9 , #5596D4)",
            md: "white",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: { xs: "100%", sm: "60%" },
            p: 1,
          }}
        >
          <Box
            p={2}
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit(submitForm)}
            noValidate
          >
            {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
              <AccountCircle sx={{ fontSize: "140px" }}></AccountCircle>
            </Box> */}
            <Typography fontSize={"25px"} textAlign={"center"} mb={1}>
              LOGIN
            </Typography>
            <TextField
              variant="standard"
              label="Username"
              {...register("username")}
              InputLabelProps={{ style: { margin: 10, marginLeft: 0 } }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                mb: 2,
                p: 1,
                pl: 0,
              }}
            ></TextField>
            <TextField
              variant="standard"
              label="Password"
              {...register("password")}
              InputLabelProps={{ style: { margin: 10, marginLeft: 0 } }}
              sx={{
                width: "100%",
                backgroundColor: "white",
                p: 1,
                pl: 0,
              }}
            ></TextField>
            <Grid container mt={2} spacing={1}>
              {/* <Grid item md={6} xs={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => navigate("/registros")}
                >
                  Crear Cuenta
                </Button>
              </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
                // onClick={() => navigate("/conversaciones")}
              >
                <Button
                  fullWidth
                  variant="contained"
                  size="medium"
                  type="submit"
                >
                  Iniciar Sesion
                </Button>
                <BoxDisplay sx={{ mt: 2, justifyContent: "center" }}>
                  <Typography
                    mt={0.2}
                    mr={0.5}
                    textAlign={"center"}
                    fontSize={"12px"}
                  >
                    ¿Ya tienes una cuenta?
                  </Typography>
                  <Link href="/registros" fontSize={"12px"}>
                    Click aqui
                  </Link>
                </BoxDisplay>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: { xs: "none", md: "flex" },
          width: { md: "50vw" },
          background: "linear-gradient(to bottom right, #4F45C9 , #5596D4)",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ p: 4 }}>
          <Typography fontSize={"50px"} color={"white"}>
            Bienvenido a esta pagina chafa
          </Typography>
          <Typography color={"gainsboro"}>
            Entrale a la estafa piramidal
          </Typography>
        </Box>
      </Box>
    </BoxDisplay>
  );
};
