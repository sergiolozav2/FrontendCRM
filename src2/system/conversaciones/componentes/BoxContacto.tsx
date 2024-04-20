import { AccountCircle } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { listaMensajes } from "../../../datos/datos";
interface Props {
  cliente: any;
  selectedClient: any;
}
export const BoxContacto = ({ cliente, selectedClient }: Props) => {
  return (
    <Box pb={0}>
      <Box
        sx={{
          borderRadius: "5px",
          backgroundColor: selectedClient ? `#E5EAFF` : "white",
          borderLeft: selectedClient
            ? `solid 5px #3E66F9`
            : "solid 5px gainsboro",
          color: selectedClient ? `#0C1F71` : "none",
          p: 0.7,
          pb: 0.3,
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
            <Box sx={{ borderTop: `5px solid ${cliente.colorCategoria}` }}>
              <Typography fontSize={9}>
                {listaMensajes
                  .find((cl: any) => cl.clienteID == cliente.clienteID)
                  ?.listaMensajes.slice(-1)[0]?.timeMessage ?? ""}
              </Typography>
            </Box>
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
            {listaMensajes
              .find((cl: any) => cl.clienteID == cliente.clienteID)
              ?.listaMensajes.slice(-1)[0]?.message ?? ""}
          </Typography>
        </Box>
      </Box>

      {/* <Divider></Divider> */}
    </Box>
  );
};
