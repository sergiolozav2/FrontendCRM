import { useNavigate } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const submitForm = () => {};
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 2,
                mt: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <Typography component="h1" variant="h5">
                {import.meta.env.VITE_NOMBRE_APP}
              </Typography>

              <Box
                component="form"
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(submitForm)}
                sx={{ width: "100%", mt: 1 }}
              >
                <TextField
                  {...register("username", {
                    required: true,
                    minLength: { value: 3, message: "error message" },
                  })}
                  required
                  label="Nombre de usuario"
                  error={
                    errors.username?.type === "required" ||
                    errors.username?.type === "minLength"
                      ? true
                      : false
                  }
                  sx={{ width: "100%" }}
                />
                {(errors.username?.type === "required" ||
                  errors.username?.type === "minLength") && (
                  <Typography
                    paddingLeft={2}
                    paddingTop={1}
                    fontSize={12.5}
                    color={"#F36892"}
                  >
                    El Nombre de usuario es obligatorio
                  </Typography>
                )}

                <TextField
                  {...register("password", {
                    required: true,
                    minLength: { value: 3, message: "error message" },
                  })}
                  required
                  label="Contraseña"
                  type="password"
                  error={
                    errors.password?.type === "required" ||
                    errors.password?.type === "minLength"
                      ? true
                      : false
                  }
                  sx={{ width: "100%", mt: 2 }}
                />
                {(errors.password?.type === "required" ||
                  errors.password?.type === "minLength") && (
                  <Typography
                    paddingLeft={2}
                    paddingTop={1}
                    fontSize={12.5}
                    color={"#F36892"}
                  >
                    La contraseña es obligatoria
                  </Typography>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
