import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ShowItem } from "../pages/productos/ShowItem";
import { FormInformacion } from "../../login/registro/FormInformacion";
import { FormRegistro } from "../../login/registro/FormRegistro";
import { ShowCliente } from "../pages/clientes/ShowCliente";
import { ShowConversacion } from "../pages/conversaciones/ShowConversacion";
import { ShowIntegrante } from "../pages/integrantes/ShowIntegrante";
import { ShowTarea } from "../pages/tareas/ShowTarea";
import { ShowVenta } from "../pages/ventas/ShowVenta";
import { LoginPage } from "../../modulos/auth/LoginPage";
import { RegisterPage } from "../../modulos/auth/RegisterPage";
import { Login } from "../../login/Login";
import { ShowMensajeRapido } from "../pages/mensajesRapidos/ShowMensajeRapido";
import { ItemPage } from "../../../src2/system/items/ItemPage";
import { ClientePage } from "../../../src2/system/clientes/ClientePage";
import { ConversacionPage } from "../../../src2/system/conversaciones/ConversacionPage";
import { ConfiguracionPage } from "../../../src2/system/configuracion/ConfiguracionPage";
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
      <Routes>
        <Route
          path="items2"
          element={
            <ShowItem setToastMessage={setToastMessage} setOpen={setOpen} />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />
        {/* <Route path="loginp" element={<Login />} /> */}
        <Route path="registros" element={<FormRegistro />} />
        <Route path="informacion" element={<FormInformacion />} />
        <Route path="conversaciones2" element={<ShowConversacion />} />
        <Route path="integrantes" element={<ShowIntegrante />} />
        <Route path="items" element={<ItemPage></ItemPage>}></Route>
        <Route path="clientes" element={<ClientePage></ClientePage>}></Route>
        <Route
          path="tareas"
          element={
            <ShowTarea setToastMessage={setToastMessage} setOpen={setOpen} />
          }
        />
        <Route path="ventas" element={<ShowVenta />} />
        <Route path="configuracion" element={<ConfiguracionPage />} />
        <Route
          path="clientes2"
          element={
            <ShowCliente setToastMessage={setToastMessage} setOpen={setOpen} />
          }
        />
        <Route
          path="conversaciones"
          element={<ConversacionPage></ConversacionPage>}
        />
        <Route path="mensajes-rapidos" element={<ShowMensajeRapido />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
