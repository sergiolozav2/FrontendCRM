import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ShowItem } from "../pages/productos/ShowItem";
import { Login } from "@mui/icons-material";
import { FormInformacion } from "../../login/registro/FormInformacion";
import { FormRegistro } from "../../login/registro/FormRegistro";
import { ShowCliente } from "../pages/clientes/ShowCliente";
import { ShowConversacion } from "../pages/conversaciones/ShowConversacion";
import { ShowIntegrante } from "../pages/integrantes/ShowIntegrante";
import { ShowTarea } from "../pages/tareas/ShowTarea";
import { ShowVenta } from "../pages/ventas/ShowVenta";

export const SystemRoutes = () => {
  //   const { authState, toggle } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  // const { toastMessage, setToastMessage } = UseToastMessage();
  //   const handleClose = () => {
  //     setOpen(false);
  //     setToastMessage("");
  //   };
  const setToastMessage = () => {};
  return (
    <>
      <div>
        <Routes>
          <Route
            path="items"
            element={
              <ShowItem setToastMessage={setToastMessage} setOpen={setOpen} />
            }
          />
          <Route path="loginp" element={<Login />} />
          <Route path="registros" element={<FormRegistro />} />
          <Route path="informacion" element={<FormInformacion />} />
          <Route path="conversaciones" element={<ShowConversacion />} />
          <Route
            path="integrantes"
            element={
              <ShowIntegrante
                setToastMessage={setToastMessage}
                setOpen={setOpen}
              />
            }
          />
          <Route
            path="tareas"
            element={
              <ShowTarea setToastMessage={setToastMessage} setOpen={setOpen} />
            }
          />
          <Route path="ventas" element={<ShowVenta />} />
          <Route
            path="clientes"
            element={
              <ShowCliente
                setToastMessage={setToastMessage}
                setOpen={setOpen}
              />
            }
          />
          {/* <Route path="mensajes-rapidos" element={<ShowMensajeRapido />} /> */}

          <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
      </div>
    </>
  );
};
