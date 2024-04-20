import { Grid } from "@mui/material";
import { listaConversacionesc } from "../../productos/Datos";
import { CardCliente } from "../components/CardCliente";

export const ShowEtapa = () => {
  return (
    <>
      <Grid item xs={12} sm={3}>
        <CardCliente
          etapa="Contacto Inicial"
          color="#3498DB"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 1"
          )}
        ></CardCliente>
      </Grid>
      <Grid item xs={12} sm={3}>
        <CardCliente
          etapa="Seguimiento"
          color="#29ABC9"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 2"
          )}
        ></CardCliente>
      </Grid>
      <Grid item xs={12} sm={3}>
        <CardCliente
          color="#29C9C2"
          etapa="Negociacion"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 3"
          )}
        ></CardCliente>
      </Grid>
      <Grid item xs={12} sm={3}>
        <CardCliente
          etapa="Vendido"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 4"
          )}
          color="#29C9C2"
        ></CardCliente>
      </Grid>
    </>
  );
};
