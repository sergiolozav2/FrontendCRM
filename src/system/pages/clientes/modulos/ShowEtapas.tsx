import { Grid } from "@mui/material";
import { listaConversacionesc } from "../../productos/Datos";
import { CardCliente } from "../components/CardCliente";

export const ShowEtapa = () => {
  return (
    <>
      <Grid item xs={12} sm={3}>
        <CardCliente
          etapa="Contacto Inicial"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 1"
          )}
        ></CardCliente>
      </Grid>
      <Grid item xs={12} sm={3}>
        <CardCliente
          etapa="Seguimiento"
          clientes={listaConversacionesc.filter(
            (cliente: any) => cliente.etapa == "Etapa 2"
          )}
        ></CardCliente>
      </Grid>
      <Grid item xs={12} sm={3}>
        <CardCliente
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
        ></CardCliente>
      </Grid>
    </>
  );
};
