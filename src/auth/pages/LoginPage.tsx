// import { useNavigate } from "react-router-dom";
// import {
//   Alert,
//   Avatar,
//   Box,
//   Button,
//   CircularProgress,
//   CssBaseline,
//   Grid,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
//   createTheme,
// } from "@mui/material";
// import { useContext, useState } from "react";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { conexionSeguridad } from "../../services/api-client";
// import { AuthContext } from "../context";
// import { ApiEndpoints, Messages, StorageKeys } from "../../models/enums";
// import { BackendResponse, Modulo } from "../../interfaces/interfaces";
// import { useForm } from "react-hook-form";
// import { getSeguridadMethod } from "../../methods/getMethod";

// const guardarState = (
//   opcion:any,
//   accesos: any,
//   aplicacion: any,
//   centro_costos:any,
//   asignaciones: any,
//   modulos: any,
//   persona: any,
//   rol: any,
//   rolIndex: any,
//   user: any,
//   token: any
// ) => {
//   localStorage.setItem(StorageKeys.ACCESOS, JSON.stringify(accesos));
//   localStorage.setItem(StorageKeys.OPCION, JSON.stringify(opcion))
//   localStorage.setItem(StorageKeys.APLICACION, JSON.stringify(aplicacion));
//   localStorage.setItem(StorageKeys.CENTRO_COSTOS, JSON.stringify(centro_costos));
//   localStorage.setItem(StorageKeys.ASIGNACIONES, JSON.stringify(asignaciones));
//   localStorage.setItem(StorageKeys.MODULOS, JSON.stringify(modulos));
//   localStorage.setItem(StorageKeys.PERSONA, JSON.stringify(persona));
//   localStorage.setItem(StorageKeys.ROL, JSON.stringify(rol));
//   localStorage.setItem(StorageKeys.ROL_INDEX, JSON.stringify(rolIndex));
//   localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
//   localStorage.setItem(StorageKeys.USER_TOKEN, token);
//   localStorage.setItem(StorageKeys.LOGGED, JSON.stringify(true));
// };

// const ordenarModulos = (modulos: Modulo[]) => {
//   const operaciones = ["query", "insert", "update", "delete"];
//   modulos.forEach((moduloPadre) => {
//     moduloPadre.SubModulos = [];
//     modulos.forEach((moduloHijo) => {
//       const nombreModuloHijo = moduloHijo.nombre.split("_");
//       const found = operaciones.some((r) => nombreModuloHijo.indexOf(r) >= 0);
//       if (moduloPadre.modulo_id === moduloHijo.modulo_padre && !found) {
//         moduloPadre.SubModulos?.push(moduloHijo);
//       }
//     });
//   });
//   return modulos;
// };

// export const LoginPage = () => {
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const submitForm = async (formData: any) => {
//     console.log(
//       "🚀 ~ file: LoginPage.tsx:70 ~ submitForm ~ formData:",
//       JSON.stringify(formData)
//     );
//     try {
//       setIsLoading(true);

//       const response = await conexionSeguridad.post<BackendResponse>("/login", {
//         ...formData,
//         codigo_app: import.meta.env.VITE_CODIGO_APP,
//       });
//       // const response = await conexionSeguridad.get("/users");

//       setIsLoading(false);

//       if (!response) {
//         showMessage(Messages.NO_SE_PUDO_COMPLETAR);
//         return;
//       }

//       const { success, message, data } = response.data;

//       if (!success) {
//         showMessage(JSON.stringify(message));
//         return;
//       }
//       var rolIndex = 0;
//       var cc_permitidos: any[] = [];
//       const { accesos, aplicacion, modulos, persona, rol, token, user } = data;
//       const { data: response_asignaciones } = await conexionSeguridad.get(
//         `/rol-asignaciones?aplicacion-id=${aplicacion.aplicacion_id}&rol-id=${rol.rol_id}`
//       );
//       console.log(response_asignaciones.data)
//       const parametro = { persona_id: persona?.persona_id ?? 0 };
//       const listaCC = await getSeguridadMethod(
//         () => {},
//         `${ApiEndpoints.CENTRO_COSTOS_BY_USER}`,
//         () => {},
//         parametro
//       );

//       // [{ codigo: 100, id: 1 }, {codigo: 105, id: 2}, {codigo: 110, id: 3}];
//       listaCC.forEach((cc: any) => {
//         cc_permitidos.push(cc.cc_codigo);
//       });
//       // console.log(cc_permitidos)
//       response_asignaciones.data.forEach((rol: any) => {
//         if (rol.nombre_componente == "check_request_button") {
//           rolIndex = 1;
//         } else if (rol.nombre_componente == "approve_request_button1") {
//           rolIndex = 2;
//         } else if (rol.nombre_componente == "approve_request_button2") {
//           rolIndex = 3;
//         } else if (rol.nombre_componente == "approve_request_button3") {
//           rolIndex = 4;
//         } else if (rol.nombre_componente == "approve_request_button4") {
//           rolIndex = 5;
//         } else if (rol.nombre_componente == "receive_accounting_button") {
//           rolIndex = 6;
//         } else if (rol.nombre_componente == "create_budget_button") {
//           rolIndex = 7;
//         }
//         if (rol.nombre_componente == "admin_button") {
//           rolIndex = 8;
//         }
//         // console.log("rolIndex")
//         // console.log(rolIndex)
//       });
//       const modulosOrdenados: Modulo[] = ordenarModulos(modulos);
//       const open = false;
//       const opcion=0;
//       guardarState(
//         opcion,
//         accesos,
//         aplicacion,
//         cc_permitidos,
//         response_asignaciones.data,
//         modulosOrdenados,
//         persona,
//         rol,
//         rolIndex,
//         user,
//         token
//       );
//       login(
//         opcion,
//         accesos,
//         response_asignaciones.data,
//         aplicacion,
//         cc_permitidos,
//         modulos,
//         open,
//         persona,
//         rol,
//         rolIndex,
//         token,
//         user,
//         true
//       );

//       navigate("/");
//     } catch (error: any) {
//       console.log(JSON.stringify(error));
//       setIsLoading(false);
//       const { response } = error;
//       if (response) {
//         const { data } = response;
//         showMessage(data.message);
//         return;
//       }
//       showMessage(JSON.stringify(error));
//     }
//   };

//   const showMessage = (text: string = "Operacion correcta") => {
//     setMessage(text);
//     // setOpen(true);
//   };

//   const defaultTheme = createTheme();

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: "100vh" }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage:
//               "url(https://source.unsplash.com/random?wallpapers)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: (t) =>
//               t.palette.mode === "light"
//                 ? t.palette.grey[50]
//                 : t.palette.grey[900],
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Grid container>
//             <Grid item xs={12}>
//               <Box
//                 sx={{
//                   p: 2,
//                   mt: 4,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                 }}
//               >
//                 <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                   <LockOutlinedIcon />
//                 </Avatar>

//                 <Typography component="h1" variant="h5">
//                   {import.meta.env.VITE_NOMBRE_APP}
//                 </Typography>

//                 <Box
//                   component="form"
//                   autoComplete="off"
//                   noValidate
//                   onSubmit={handleSubmit(submitForm)}
//                   sx={{ width: "100%", mt: 1 }}
//                 >
//                   <TextField
//                     {...register("username", {
//                       required: true,
//                       minLength: { value: 3, message: "error message" },
//                     })}
//                     required
//                     label="Nombre de usuario"
//                     error={
//                       errors.username?.type === "required" ||
//                       errors.username?.type === "minLength"
//                         ? true
//                         : false
//                     }
//                     sx={{ width: "100%" }}
//                   />
//                   {(errors.username?.type === "required" ||
//                     errors.username?.type === "minLength") && (
//                     <Typography
//                       paddingLeft={2}
//                       paddingTop={1}
//                       fontSize={12.5}
//                       color={"#F36892"}
//                     >
//                       El Nombre de usuario es obligatorio
//                     </Typography>
//                   )}

//                   <TextField
//                     {...register("password", {
//                       required: true,
//                       minLength: { value: 3, message: "error message" },
//                     })}
//                     required
//                     label="Contraseña"
//                     type="password"
//                     error={
//                       errors.password?.type === "required" ||
//                       errors.password?.type === "minLength"
//                         ? true
//                         : false
//                     }
//                     sx={{ width: "100%", mt: 2 }}
//                   />
//                   {(errors.password?.type === "required" ||
//                     errors.password?.type === "minLength") && (
//                     <Typography
//                       paddingLeft={2}
//                       paddingTop={1}
//                       fontSize={12.5}
//                       color={"#F36892"}
//                     >
//                       La contraseña es obligatoria
//                     </Typography>
//                   )}

//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     disabled={isLoading}
//                     sx={{ mt: 3, mb: 2 }}
//                   >
//                     {isLoading && <CircularProgress sx={{ mr: 2 }} />}
//                     Iniciar sesión
//                   </Button>

//                   {message && (
//                     <Alert severity="error" sx={{ mt: 3 }}>
//                       {message}
//                     </Alert>
//                   )}
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// };
