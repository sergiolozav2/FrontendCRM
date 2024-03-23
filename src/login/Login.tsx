import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate=useNavigate()
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
        <Box>
          <Typography variant="h6" textAlign={"center"} mb={1}>
            LOGIN
          </Typography>
          <TextField
            variant="standard"
            label="Username"
            InputLabelProps={{ style: { margin: 10 } }}
            sx={{ width: "100%", backgroundColor: "white", mb: 2, p: 1 }}
          ></TextField>
          <TextField
            variant="standard"
            label="Password"
            InputLabelProps={{ style: { margin: 10 } }}
            sx={{ width: "100%", backgroundColor: "white", p: 1 }}
          ></TextField>
          <Grid container mt={2} spacing={1}>
            <Grid item md={6} xs={6}>
              <Button fullWidth variant="outlined" onClick={()=>navigate('/registros')}>
                Crear Cuenta
              </Button>
            </Grid>
            <Grid item md={6} xs={6}  onClick={()=>navigate('/conversaciones')}>
              <Button fullWidth variant="contained">
                Iniciar Sesion
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
