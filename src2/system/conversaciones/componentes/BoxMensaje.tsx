import { Box, Typography } from "@mui/material";
interface Props {
  personMessage: number;
  message: string;
  time_message: string;
}
export const BoxMensaje = ({ personMessage, message, time_message }: Props) => {
  return (
    <Box
      display={"flex"}
      mb={0.5}
      justifyContent={personMessage == 1 ? "right" : "left"}
    >
      {personMessage == 1 ? (
        <Box
          sx={{
            p: 1,
            borderRadius: "5px",
            backgroundColor: "#3E66F9",
            color: "white",
            maxWidth: "80%",
          }}
        >
          <Typography fontSize={14}>{message}</Typography>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Typography fontSize={8}>{time_message}</Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            p: 1,
            borderRadius: "5px",
            backgroundColor: "#F9F9F9",
            maxWidth: "80%",
          }}
        >
          <Typography fontSize={14}>{message}</Typography>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Typography fontSize={8}>{time_message}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}; // setToastMessage,
