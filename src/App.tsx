import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
// import { ShowCliente } from "./paginas/clientes/ShowCliente";
import { useState } from "react";
import { AppRouter } from "./router/AppRouter";

function App() {
  const [open, setOpen] = useState(false);
  const setToastMessage = (_message: any) => {};
  return <AppRouter />;
}

export default App;
