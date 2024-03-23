import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { BoxCliente } from "./BoxCliente";
interface Props {
  clientes: any[];
  etapa: string;
  // handleCloseDialogForm?: () => void;
}
export const CardCliente = ({ clientes, etapa }: Props) => {
  return (
    <Card sx={{ height: { sm: "calc(100vh - 140px)", xs: "inherit" } }}>
      <CardContent>
        <Typography variant="h6">{etapa}</Typography>
        <Divider sx={{ mb: 2 }}></Divider>
        {clientes.map((cliente: any) => (
          <BoxCliente cliente={cliente}></BoxCliente>
        ))}
      </CardContent>
    </Card>
  );
};
