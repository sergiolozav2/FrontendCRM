import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
interface Props {
  lastMessage: string;
  timeMessage: string;
  cliente: any;
}
export const BoxConversacion = ({
  cliente,
  lastMessage,
  timeMessage,
}: Props) => {
  return (
    <Box pb={0.2}>
      <Box
        sx={{
          borderLeft: `solid 5px ${cliente.colorCategoria}`,
          p: 0.7,
          pb: 0,
        }}
        display={"flex"}
      >
        <AccountCircle
          color="disabled"
          sx={{ mr: 1, mt: 0.4, fontSize: "30px" }}
        ></AccountCircle>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"175px"}
          >
            <Box>
              <Typography fontSize={14}>{cliente.clienteNombre}</Typography>
            </Box>
            <Typography fontSize={9}>{timeMessage}</Typography>
          </Box>
          <Typography
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: { sm: "175px", xs: "100%" },
              display: "inline-block",
            }}
            fontSize={11}
          >
            {lastMessage}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 0.5 }}></Divider>
    </Box>
  );
};
