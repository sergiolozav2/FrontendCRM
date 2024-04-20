import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
interface Props {
  clientes: any[];
  etapa: string;
  color: string;
  // handleCloseDialogForm?: () => void;
}
export const BoxCliente = ({ clientes, etapa, color }: Props) => {
  return (
    <Card sx={{ height: { sm: "calc(100vh - 140px)", xs: "inherit" } }}>
      <CardContent>
        <Typography variant="h6">{etapa}</Typography>
        <Divider sx={{ mb: 2 }}></Divider>
        {clientes.map((cliente: any) => (
          <Box
            sx={{
              borderRadius: "5px",
              borderLeft: `3px solid ${color}`,
              padding: 1,
              mb: 1,
              boxShadow: "2px 2px 5px #E3E3E3",
            }}
          >
            <Typography>{cliente.cliente}</Typography>
            <Typography fontSize={10}>{cliente.producto}</Typography>
            <Typography fontSize={8}>{cliente.estado}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
