import { Grid } from "@mui/material";
import { BoxCliente } from "./BoxCliente";
import { listaConversacionesc } from "../../../datos/datos";
export const CardCliente = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <BoxCliente
            etapa="Contacto Inicial"
            color="#3498DB"
            clientes={listaConversacionesc.filter(
              (cliente: any) => cliente.etapa == "Etapa 1"
            )}
          ></BoxCliente>
        </Grid>
        <Grid item xs={12} sm={3}>
          <BoxCliente
            etapa="Seguimiento"
            color="#29ABC9"
            clientes={listaConversacionesc.filter(
              (cliente: any) => cliente.etapa == "Etapa 2"
            )}
          ></BoxCliente>
        </Grid>
        <Grid item xs={12} sm={3}>
          <BoxCliente
            color="#29C9C2"
            etapa="Negociacion"
            clientes={listaConversacionesc.filter(
              (cliente: any) => cliente.etapa == "Etapa 3"
            )}
          ></BoxCliente>
        </Grid>
        <Grid item xs={12} sm={3}>
          <BoxCliente
            etapa="Vendido"
            clientes={listaConversacionesc.filter(
              (cliente: any) => cliente.etapa == "Etapa 4"
            )}
            color="#29C9C2"
          ></BoxCliente>
        </Grid>
      </Grid>
    </>
  );
};
