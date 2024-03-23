import {
  DateRange,
  Person,
  Star,
  StarOutline,
  VisibilityOutlined,
} from "@mui/icons-material";

import {
  Box,
  Grid,
  IconButton,
  Radio,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ApiEndpoints } from "../../../../models/enums";
import { useAuth } from "../../../../auth/context/useAuth";


interface Props {
  tarea: any;
  openEdit: boolean;
  withGrupo: boolean;
  abrirEdicion: (tarea: any) => void;
  setOpen: (open: boolean) => void;
  setToastMessage: (toastMessage: string) => void;
  verTarea: (tareaID: any) => void;
  getTareas: (opcion: any) => void;
}
export const BoxTarea = ({
  tarea,
  abrirEdicion,
  setToastMessage,
  openEdit,
  setOpen,
  withGrupo,
  verTarea,
  getTareas,
}: Props) => {
  const [checkValue, setCheckValue] = useState(tarea.isCompleted);
  const showMessage = (text: string) => {
    setToastMessage(text);
    setOpen(true);
  };
  const { authState } = useAuth();
  const { user, persona } = authState;
  const [_opcion, setOpcion] = useState({});
  const [vista] = useState<any>();
  // const handleSetOpcion = (opcion: any) => {
  //   if (opcion.opcion_id == 1) {
  //     verTarea(tarea);
  //   }
  //   if (opcion.opcion_id == 2) {
  //     handleDestacado();
  //   }
  // };
  const handleChange = async () => {
    setCheckValue(!checkValue);
    tarea.estado_id = !checkValue ? 5 : 1;
    const respuesta = await putMethod(
      showMessage,
      ApiEndpoints.TAREAS,
      tarea.tareaID,
      tarea
    );
    if (tarea.cantidad > 0 && !checkValue) {
      await postMethod(showMessage, ApiEndpoints.TAREAS, tarea);
    }
    // if (respuesta) {
    //   // getTareas(vista.opcion_id);
    // }
  };
  const handleDestacado = async () => {
    tarea.esImportante = tarea.esImportante == 1 ? 0 : 1;
    await putMethod(showMessage, ApiEndpoints.TAREAS, tarea.tareaID, tarea);
    // console.log(tarea);
    //   getTareas(vista.opcion_id);
  };

  return (
    <Box
      sx={{
        p: 1,
        // borderRadius: "5px",
        // m: 1,
        // backgroundColor: "white",
        //    boxShadow:tarea.esImportante == false
        //        ?"":`0px 0px 3px 3px blue`,
        // marginBlock: 1,
        display: "flex",
        justifyContent: "space-between",
        borderLeft:"5px solid #0D98BB",
        borderBottom:"1px solid gainsboro"
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid item>
          <Radio
            checked={checkValue}
            onClick={handleChange}
            disabled={tarea.asignado_id != user?.id}
            name="radio-buttons"
            sx={{ width: "40px"}}
            inputProps={{ "aria-label": "A" }}
          />
        </Grid>
        <Grid
          sx={{ width: "calc(100% - 40px)" }}
          onClick={() => {
            abrirEdicion(tarea);
          }}
        >
          <Grid container>
            <Grid item md={12} xs={12} mb={0.5}>
              <Typography fontSize={12}>{tarea.descripcion} </Typography>
            </Grid>
            {/* <Grid item mr={1}>
                <ViewHeadline color="error" sx={{ fontSize: "17px" }}>
                  {tarea.categoria} |{" "}
                </ViewHeadline>
              </Grid>
              <Grid item mr={1}>
                <Typography fontSize={11}> {tarea.categoria} </Typography>
              </Grid> */}
            {tarea.cliente_nombre ? (
              <>
                {/* <Grid item mr={1}>
                    <Typography fontSize={11}> |</Typography>
                  </Grid> */}
                <Grid item mr={1} >
                  <Person color="error" sx={{ fontSize: "12px" }}></Person>
                </Grid>
                <Grid item mr={1} mt={0.4}>
                  <Typography fontSize={9}>
                    {" " + tarea.cliente_nombre}
                  </Typography>
                </Grid>
              </>
            ) : null}

            {tarea.fecha_fin ? (
              <>
                {tarea.cliente_nombre ? (
                  <Grid item mr={1} mt={0.3}>
                    <Typography fontSize={9}> |</Typography>
                  </Grid>
                ) : null}

                <Grid item mr={1} >
                  <DateRange
                    color="error"
                    sx={{ fontSize: "12px" }}
                  ></DateRange>
                </Grid>
                <Grid item mr={1} mt={0.4}>
                  <Typography fontSize={9}>{tarea.fecha_fin}</Typography>
                </Grid>
              </>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      <Box
        mr={1}
        sx={{
          alignItems: "center",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (min-width: 768px)": {
            display: openEdit ? "none" : "flex",
          },
        }}
      >
        <Tooltip title="Ver Detalles">
          <IconButton sx={{}} onClick={() => verTarea(tarea)}>
            <VisibilityOutlined></VisibilityOutlined>
          </IconButton>
        </Tooltip>

        <Tooltip title="Destacar">
          <IconButton sx={{}} onClick={handleDestacado}>
            {tarea.esImportante == 1 ? (
              <Star></Star>
            ) : (
              <StarOutline></StarOutline>
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        sx={{
          "@media (max-width: 768px)": {
            display: "flex",
          },
          "@media (min-width: 768px)": {
            display: openEdit ? "flex" : "none",
          },
        }}
      >
        {tarea.esImportante ? (
          <StarOutline sx={{ mt: 1.5 }} color="error"></StarOutline>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
// function useAuth(): { authState: any; } {
//   throw new Error("Function not implemented.");
// }

function putMethod(showMessage: (text: string) => void, TAREAS: any, tareaID: any, tarea: any) {
  throw new Error("Function not implemented.");
}

function postMethod(showMessage: (text: string) => void, TAREAS: any, tarea: any) {
  throw new Error("Function not implemented.");
}

