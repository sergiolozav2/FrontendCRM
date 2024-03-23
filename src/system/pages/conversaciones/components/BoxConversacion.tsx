import { AccountCircle } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
interface Props {
  nombreContacto: string;
  lastMessage: string;
  timeMessage: string;
}
export const BoxConversacion = ({
  nombreContacto,
  lastMessage,
  timeMessage,
}: Props) => {
  return (
    <Box mb={0.2}>
      <Box
        sx={{ borderLeft: "solid 5px #5C2CC3", p: 0.5, pb: 0 }}
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
              <Typography fontSize={14}>{nombreContacto}</Typography>
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
          <Divider></Divider>
        </Box>
      </Box>
    </Box>
  );
};
