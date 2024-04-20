import { Box, Typography } from "@mui/material";
interface Props {
  cliente: any;
  color: any;
  // handleCloseDialogForm?: () => void;
}
export const BoxCliente = ({ cliente, color }: Props) => {
  return (
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
  );
};
